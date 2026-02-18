<div align="center">

<img src="1.png" width="700"/>

# DO-NOT-USE-xmrwallet-com

[![Stars](https://img.shields.io/github/stars/phishdestroy/DO-NOT-USE-xmrwallet-com?style=flat-square&color=FF0000)](https://github.com/phishdestroy/DO-NOT-USE-xmrwallet-com/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/phishdestroy/DO-NOT-USE-xmrwallet-com?style=flat-square&color=000000)](https://github.com/phishdestroy/DO-NOT-USE-xmrwallet-com/commits/main/)
[![License](https://img.shields.io/badge/license-MIT-FF0000?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/status-active_investigation-FF0000?style=flat-square)](#)
[![Victims](https://img.shields.io/badge/victims-15%2B_documented-FF0000?style=flat-square)](#-victim-reports)
[![Stolen](https://img.shields.io/badge/stolen-$2M%2B_estimated-FF0000?style=flat-square)](#-victim-reports)

**Security analysis of xmrwallet.com — confirmed private key exfiltration and server-side transaction hijacking.**
15+ documented victims. $2M+ estimated stolen. Operating since 2016.

[**🌐 Full Evidence Page**](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/) · [**📄 Technical Proof**](https://github.com/XMRWallet/Website/issues/36) · [**🚨 Report Abuse**](#-report-abuse) · [**✅ Safe Alternatives**](#-safe-alternatives)

[![](https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif)](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/)

</div>

---

## 🚨 Summary

> **xmrwallet.com transmits your private Monero view key to their server on every API request. Transactions are hijacked server-side. The GitHub repository is a facade — 5.3 years of zero commits while the real theft infrastructure evolved separately.**

| Finding | Status |
|---------|--------|
| Private view key sent to server in plaintext | 🔴 **CONFIRMED** |
| `session_key` encodes viewkey — re-sent 40+ times per session | 🔴 **CONFIRMED** |
| `raw_tx_and_hash.raw = 0` — client TX discarded, server redirects funds | 🔴 **CONFIRMED** |
| 4 Google trackers (GTM, UA, GA4, DoubleClick) inside wallet | 🔴 **CONFIRMED** |
| GitHub repo has 5.3-year commit gap (2018–2024) | 🔴 **CONFIRMED** |
| Operator banned from r/Monero, deleted GitHub issues | 🔴 **CONFIRMED** |
| 50+ paid SEO articles, zero donation wallet | 🔴 **CONFIRMED** |

---

## 🔍 Technical Evidence

### 1. View Key Exfiltration

Every session starts with a POST to `/auth.php` — your private view key transmitted in plaintext:

```
// POST https://www.xmrwallet.com/auth.php
address = 46EkQdF7iQ4i4Ah935SipgXbDSryh5...
viewkey = efba13ecb8b360660a3dcaafaf7cf99149713d064b9d64997b2454d58ee67800
```

The server returns `session_key` — not a random token, but your address + viewkey encoded in Base64:

```
session_key = [blob]:[base64(address)]:[base64(viewkey)]

python3 -c "import base64; print(base64.b64decode('ZWZiYTEzZWNiOGIzNjA2NjBhM2RjYWFmYWY3Y2Y5OTE0OTcxM2QwNjRiOWQ2NDk5N2IyNDU0ZDU4ZWU2NzgwMA==').decode())"
# OUTPUT: efba13ecb8b360660a3dcaafaf7cf99149713d064b9d64997b2454d58ee67800
#                                          ^^^ YOUR PRIVATE VIEW KEY ^^^
```

This `session_key` is re-sent to the server on **every single request** — 40+ times per session:

```
POST /getheightsync.php     viewkey  ×12
POST /gettransactions.php   viewkey  ×10
POST /getbalance.php        viewkey  ×6
POST /getsubaddresses.php   viewkey  ×4
POST /support_login.html    viewkey  session_id=8de50123dab32  ← BACKDOOR
```

### 2. Transaction Hijacking

```javascript
raw_tx_and_hash.raw = 0       // client TX discarded, never broadcast

if(type == 'swept') {         // server-initiated theft marker
  txid = 'Unknown transaction id'  // obfuscated in UI
}
```

The client builds a transaction — then discards it. Only metadata goes to the server, which constructs its own transaction and can redirect funds to **any address**.

### 3. Hidden Production Logic

Not present anywhere in the public GitHub repository:

- `session_key` parameter
- `verification` field
- encrypted `data` payload
- `/support_login.html` backdoor endpoint

Auditing the GitHub repo is useless — production code differs fundamentally.

### 4. Google Tag Manager Abuse

GTM loads arbitrary JavaScript from Google's servers. The operator can push new code — including key exfiltration scripts — to all users **without changing a single line on GitHub**.

```
GET googletagmanager.com/gtm.js   ×12  — loads arbitrary JS
GET google-analytics.com          ×12  — UA-116766241-1
GET analytics.google.com/g/collect ×5  — GA4
GET stats.g.doubleclick.net        ×1  — ad tracker
```

---

## 🕵️ Operator Profile

| Attribute | Value |
|-----------|-------|
| **GitHub** | [nathroy](https://github.com/nathroy) (ID: 39167759) |
| **Email** | admin@xmrwallet.com · support@ · feedback@ |
| **Reddit** | u/WiseSolution — **banned from r/Monero** |
| **Twitter** | @xmrwalletcom |
| **GitHub org created** | 2018-05-10 |
| **Commit gap** | **2018-11-06 → 2024-03-15 (5.3 years — ZERO commits)** |
| **Domain paid until** | 2031 (registered 2016) |

### GitHub Commit Timeline

```
2018-05-10  v1 First release          ← looks open-source
2018-11-06  Bulletproof Update        ← last real commit

   2018 ————————————————————————————————— 2024   ZERO COMMITS (5.3 YEARS)
   ↑ Production actively updated. session_key added. Theft infrastructure evolved.
   ↑ Wayback Machine 2023: ZERO references to session_key in archived pages.

2024-03-15  v0.18.0.0 "2024 updates"  ← sanitized dump, PHP backend excluded
current     v0.18.4.1 production      ← additional changes NOT in GitHub
```

### Cover-Up Pattern

- ❌ Banned from r/Monero after self-promotion in 2018
- ❌ GitHub Issue #13 deleted by repository owner
- ❌ Standard theft deflection: *"sync problem — try Monero CLI"* (funds already gone)
- ❌ 50+ paid/sponsored articles on crypto media — PhishDestroy contacted all publishers, majority removed them
- ❌ 100+ blog posts, 10 languages, DDoS-Guard CDN, Android app, active Trustpilot management
- ❌ **Zero donation wallet address** — claimed "volunteer project" funded by no one

> A volunteer open-source project does not bulk-purchase sponsored articles. With no donation wallet, the money comes from stolen XMR.

---

## 👥 Victim Reports

| Amount | Source | Notes |
|--------|--------|-------|
| **590 XMR** (~$177,000) | Sitejabber | *"deposited 590 monero — 2 days gone"* |
| **17.44 XMR** | Trustpilot | TxID & TX Key documented |
| Unknown | Trustpilot | *"transferred to some other wallet instead of mine"* |
| **$200** | Trustpilot | *"stole $200, leaving me high and dry"* |
| **20 XMR** | Sitejabber | *"put 20 xmr — next day 0 xmr"* |
| Unknown | Trustpilot | *"cannot verify transaction using private viewing key"* |

> Conservative estimate: **10,000–50,000+ wallets created** over 8 years. Total stolen: **5,000–50,000+ XMR** ($1.5M–$15M+ at historical prices).

---

## 🌐 Infrastructure IOCs

| Type | Value | Notes |
|------|-------|-------|
| Domain | `xmrwallet.com` | NameSilo, paid until 2031 |
| Tor | `xmrwalletdatuxms.onion` | Historical |
| IP | `186.2.165.49` | DDoS-Guard subsidiary AS59692 |
| MX | `mail.privateemail.com` | Namecheap private email |
| Cookies | `__ddg8_` `__ddg9_` `__ddg10_` `__ddg1_` | DDoS-Guard tracking |
| Analytics | `UA-116766241-1` | Google Analytics |
| Typosquats | `xmreallet.com` `xmrqallet.com` `xmrwalley.com` `xmrwallrt.com` `xmrwallwt.com` | |
| session_key | `[blob]:[b64_address]:[b64_viewkey]` | **Key exfiltration vector** |
| TX marker | `type == 'swept'` | Server-initiated theft |
| Backdoor | `/support_login.html` `session_id=8de50123dab32` | Not user-initiated |

### External Threat Intelligence

[![VirusTotal](https://img.shields.io/badge/VirusTotal-Multiple_Vendors_Flag-FF0000?style=flat-square)](https://www.virustotal.com/gui/domain/www.xmrwallet.com)
[![URLQuery](https://img.shields.io/badge/URLQuery-Report_Available-FF0000?style=flat-square)](https://urlquery.net/report/a56ea134-19f0-467f-88c3-3444f5c49c06)
[![ScamAdviser](https://img.shields.io/badge/ScamAdviser-Low_Trust_Score-FF0000?style=flat-square)](https://www.scamadviser.com/check-website/xmrwallet.com)

---

## 📢 Report Abuse

<div align="center">

| Platform | Link |
|----------|------|
| 🇺🇸 FBI IC3 | [ic3.gov](https://ic3.gov) |
| 🇺🇸 FTC | [reportfraud.ftc.gov](https://reportfraud.ftc.gov) |
| 🇬🇧 Action Fraud | [actionfraud.police.uk](https://www.actionfraud.police.uk) |
| 🇨🇦 CAFC | [antifraudcentre.ca](https://www.antifraudcentre-centreantifraude.ca) |
| 🌍 Interpol | [interpol.int/Crimes/Cybercrime](https://www.interpol.int/Crimes/Cybercrime) |
| Google Safe Browsing | [report_phish](https://safebrowsing.google.com/safebrowsing/report_phish/) |
| Netcraft | [report.netcraft.com](https://report.netcraft.com) |
| VirusTotal | [virustotal.com/gui/domain/xmrwallet.com](https://www.virustotal.com/gui/domain/xmrwallet.com) |
| Registrar | abuse@namesilo.com |
| Hosting | abuse@ddos-guard.net |

</div>

---

## ✅ Safe Alternatives

| Wallet | Platform | Link |
|--------|----------|------|
| **Monero GUI** | Desktop (Official) | [getmonero.org/downloads](https://getmonero.org/downloads) |
| **Feather Wallet** | Desktop | [featherwallet.org](https://featherwallet.org) |
| **Monerujo** | Android | [monerujo.io](https://monerujo.io) |
| **Cake Wallet** | iOS / Android | [cakewallet.com](https://cakewallet.com) |

> ⚠️ **Never use a web wallet that asks for your private key or seed phrase.**

---

## 🔗 Related Projects

| Project | Description | Stars |
|---------|-------------|-------|
| [**destroylist**](https://github.com/phishdestroy/destroylist) | 70,000+ malicious domain blocklist | ![](https://img.shields.io/github/stars/phishdestroy/destroylist?style=flat-square&color=FF0000) |
| [**ScamIntelLogs**](https://github.com/phishdestroy/ScamIntelLogs) | Intel archive of crypto scam operations | ![](https://img.shields.io/github/stars/phishdestroy/ScamIntelLogs?style=flat-square&color=FF0000) |

---

## 📡 Connect

<div align="center">

[![Website](https://img.shields.io/badge/🌐_WEBSITE-FF0000?style=for-the-badge)](https://phishdestroy.io)
[![Telegram](https://img.shields.io/badge/📢_TELEGRAM-000000?style=for-the-badge)](https://t.me/destroy_phish)
[![Bot](https://img.shields.io/badge/🤖_BOT-000000?style=for-the-badge)](https://t.me/PhishDestroy_bot)
[![Twitter](https://img.shields.io/badge/🐦_TWITTER-000000?style=for-the-badge)](https://x.com/Phish_Destroy)
[![API](https://img.shields.io/badge/⚡_API-FF0000?style=for-the-badge)](https://api.destroy.tools)

</div>

---

## ⚠️ Disclaimer

This repository contains evidence of criminal activity published for research, public safety, and law enforcement purposes. Data is provided as-is based on observed behavior and publicly available analysis. Independent verification recommended.

---

<div align="center">

**Scammers delete evidence. We preserve it.**

*PhishDestroy — [phishdestroy.io](https://phishdestroy.io)*

</div>
