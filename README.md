<div align="center">

<img src="1.png" width="700"/>

<br>

<img src="22.png" width="700"/>

<br><br>

# `DO NOT USE` xmrwallet.com

### Confirmed Monero theft operation — active since 2016

<br>

<a href="https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/"><img src="https://img.shields.io/badge/FULL_EVIDENCE-phishdestroy.github.io-FF0000?style=for-the-badge&logo=firefox&logoColor=white" alt="Full Evidence"></a>
<a href="https://phishdestroy.medium.com/xmrwallet-com-2953f35b8a79"><img src="https://img.shields.io/badge/MEDIUM-Full_Article-000000?style=for-the-badge&logo=medium&logoColor=white" alt="Medium"></a>
<a href="https://dev.to/phishdestroy/xmrwallet-com-scam"><img src="https://img.shields.io/badge/DEV.TO-Technical_Writeup-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="dev.to"></a>

<br>

<a href="https://www.virustotal.com/gui/domain/www.xmrwallet.com"><img src="https://img.shields.io/badge/VirusTotal-6%2F93_MALICIOUS-FF0000?style=flat-square" alt="VirusTotal"></a>
<a href="https://github.com/phishdestroy/DO-NOT-USE-xmrwallet-com/stargazers"><img src="https://img.shields.io/github/stars/phishdestroy/DO-NOT-USE-xmrwallet-com?style=flat-square&color=FF0000" alt="Stars"></a>
<a href="#"><img src="https://img.shields.io/badge/victims-15%2B_documented-FF0000?style=flat-square" alt="Victims"></a>
<a href="#"><img src="https://img.shields.io/badge/stolen-$2M%2B_estimated-FF0000?style=flat-square" alt="Stolen"></a>
<a href="#"><img src="https://img.shields.io/badge/operating_since-2016-FF0000?style=flat-square" alt="Since 2016"></a>
<a href="#-namesilo-covered-for-the-operator"><img src="https://img.shields.io/badge/NameSilo-COVERING_FOR_OPERATOR-FF7A00?style=flat-square" alt="NameSilo"></a>

<br><br>

> **xmrwallet.com** steals your Monero private view key on login. Transactions are hijacked server-side. The GitHub repo is a facade — 5.3 years of zero commits while the real theft code evolved separately. **15+ victims. $2M+ stolen. NameSilo is protecting the operator.**

<br>

| Domain | Status |
|:------:|:------:|
| `xmrwallet.com` | `ACTIVE` — NameSilo refuses to act |
| `xmrwallet.me` | `ACTIVE` — abuse reported |
| `xmrwallet.cc` | `SUSPENDED` |
| `xmrwallet.biz` | `SUSPENDED` |
| `xmrwallet.net` | `DNS DEAD` |

<br>

[![](https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif)](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/)

</div>

---

<div align="center">

### Quick Navigation

[**How the Theft Works**](#-how-xmrwalletcom-steals-your-monero) · [**NameSilo Cover-Up**](#-namesilo-covered-for-the-operator) · [**Operator Emails**](#-the-operators-own-words) · [**Victim Reports**](#-victim-reports) · [**Escape Domains**](#-escape-domains--caught-replaced-caught-again) · [**Timeline**](#-full-timeline) · [**Report Abuse**](#-report-abuse) · [**Safe Wallets**](#-safe-alternatives)

</div>

---

<br>

## How xmrwallet.com Steals Your Monero

<table>
<tr>
<td width="50%">

### 1. View Key Theft

Every login sends your **private view key** to the server encoded as Base64:

```
POST /auth.php

session_key = [blob]:[base64(address)]:[base64(viewkey)]
```

The `session_key` is re-sent **40+ times per session** across 8 PHP endpoints. The operator can monitor your entire balance and all incoming transactions in real-time.

</td>
<td width="50%">

### 2. Transaction Hijacking

When you send XMR, the server discards your real transaction:

```javascript
raw_tx_and_hash.raw = 0    // your TX — discarded

if (type == 'swept') {     // theft marker
  txid = 'Unknown transaction id'
}
```

The server builds its own TX, redirects your funds to the operator's wallet, and shows you a fake "sent" confirmation.

</td>
</tr>
</table>

<details>
<summary><b>Full technical proof — network capture data</b></summary>

<br>

**View key transmitted in plaintext on every request:**

```
POST /auth.php            → viewkey transmitted
POST /getheightsync.php   → viewkey ×12
POST /gettransactions.php → viewkey ×10
POST /getbalance.php      → viewkey ×6
POST /getsubaddresses.php → viewkey ×4
POST /support_login.html  → viewkey + session_id=8de50123dab32  ← BACKDOOR
```

**Decoding the session_key confirms the view key:**

```
python3 -c "import base64; print(base64.b64decode(
  'ZWZiYTEzZWNiOGIzNjA2NjBhM2RjYWFmYWY3Y2Y5OTE0OTcxM2QwNjRiOWQ2NDk5N2IyNDU0ZDU4ZWU2NzgwMA=='
).decode())"

# OUTPUT: efba13ecb8b360660a3dcaafaf7cf99149713d064b9d64997b2454d58ee67800
#         ^^^ THIS IS YOUR PRIVATE VIEW KEY ^^^
```

**4 Google trackers inside a "privacy wallet":**

```
GET googletagmanager.com/gtm.js   ×12  — loads arbitrary JS
GET google-analytics.com          ×12  — UA-116766241-1
GET analytics.google.com/g/collect ×5  — GA4
GET stats.g.doubleclick.net        ×1  — ad tracker
```

</details>

<br>

<div align="center">
<img src="xmrwallet-scammer.png" width="700"/>

> *Issue #35 — Full code analysis: `raw_tx_and_hash.raw = 0`, session_key decoded, 5.3yr commit gap, operator identity*
</div>

---

<br>

## NameSilo Covered for the Operator

> **Three registrars suspended the operator's domains. NameSilo was the only one that refused — and then fabricated a "compromise" story to protect him.**

<br>

<div align="center">

| Domain | Registrar | Action |
|:------:|:---------:|:------:|
| `xmrwallet.cc` | PDR | **SUSPENDED** |
| `xmrwallet.biz` | WebNic | **SUSPENDED** |
| `xmrwallet.net` | NICENIC | **DNS DEAD** |
| `xmrwallet.com` | **NameSilo** | *"The registrant is the victim"* |

**Same evidence. Same proof. Three registrars acted. NameSilo wrote a cover story.**

</div>

<br>

**What NameSilo claimed:**
- The site was "compromised" — hacked by a third party
- The operator is "the victim"
- No action should be taken

**What NameSilo provided as evidence:** Nothing. Zero. No forensic report. No server logs. No timeline.

**What the operator's own emails prove:** He built this code. He defends this code. He runs this site. There was no hack.

<br>

<div align="center">
<a href="https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-namesilo-xmrwallet-coverup.html"><img src="https://img.shields.io/badge/FULL_ANALYSIS-NameSilo_Lied_%E2%80%94_Email_Proof-FF7A00?style=for-the-badge" alt="NameSilo Cover-Up"></a>
</div>

---

<br>

## The Operator's Own Words

Between **February 16–23, 2026**, the operator emailed PhishDestroy from `royn5094@protonmail.com` — **before** we contacted NameSilo, **before** any abuse report, and **before** the "compromise" story existed.

<br>

<table>
<tr>
<td>

**Feb 16** — Email #1

> *"We don't store seeds or keys, everything is done in your browser locally. Please remove your report. N.R."*

First person — **"we."** Defends the site as his own. No mention of any compromise. Meanwhile, live traffic shows `session_key = Base64(viewkey)` transmitted 40+ times per session. Nothing is "local."

</td>
</tr>
<tr>
<td>

**Feb 17** — Email #2

> *"This is the data we need to offer the service."*

24 hours after "we don't store keys" — now admits **"this is the data we need."** Contradicts himself within one day.

</td>
</tr>
<tr>
<td>

**Feb 17** — Email #3

> *"Feel free to subpoena the domain registrar for my information to submit a complaint in the courts."*

**This changes everything.** Written **before** we contacted NameSilo. Before any abuse report. A scam operator on $550/month bulletproof hosting behind DDoS-Guard doesn't invite registrar scrutiny — **unless he already knows the registrar will protect him.**

He didn't say "subpoena the hosting provider." He said **"subpoena the registrar"** — NameSilo — with complete confidence. Three days later, NameSilo called him "the victim."

</td>
</tr>
<tr>
<td>

**Feb 23** — Email #4

> *"I've hired a lawyer and a private investigator."*
> *"Trezor and Ledger also get their view keys."*

Sent the day `.cc` and `.biz` were suspended. Panic mode. The lawyer never appeared. **Trezor is a hardware wallet with no server** — technically illiterate defense. Still no mention of any hack. Still defends the code as his own.

</td>
</tr>
</table>

<br>

<div align="center">

**The "compromise" story appeared for the first time on March 4 — in NameSilo's response. Not from the operator. From NameSilo.**

</div>

---

<br>

## Escape Domains — Caught, Replaced, Caught Again

The operator purchased **four escape domains** using four different registrars to slow coordinated takedowns. He didn't even change servers — new domains point to the exact same IPs:

<br>

| Domain | Registrar | Prepaid | IP | Status |
|:------:|:---------:|:-------:|:--:|:------:|
| `xmrwallet.cc` | PublicDomainRegistry | 8 years | 185.129.100.248 | **SUSPENDED** |
| `xmrwallet.biz` | WebNic.cc | 5 years | 190.115.31.40 | **SUSPENDED** |
| `xmrwallet.net` | NICENIC International | 10 years | 190.115.31.40 ← same | **DNS DEAD** |
| `xmrwallet.me` | Key-Systems GmbH | 10 years | 185.129.100.248 ← same | **ACTIVE** |

<br>

> **3 out of 4 escape domains neutralized. 23 years of prepaid registration wasted. Zero GitHub commits during any migration.**

---

<br>

## He Deleted the Evidence

On **2026-02-23**, hours after `.cc` and `.biz` were suspended, the operator deleted **GitHub Issues #35 and #36** — containing the full technical analysis, victim reports, and community discussions.

Not closed. **Deleted.** No technical rebuttal. No proof of innocence. Just deletion.

<div align="center">

**We archived everything before he pressed delete.**

<a href="https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/deleted.html"><img src="https://img.shields.io/badge/ARCHIVED_EVIDENCE-Screenshots_%2B_Code_%2B_Network_Captures-FF0000?style=for-the-badge" alt="Archived Evidence"></a>

</div>

<br>

<div align="center">
<img src="dont-cry.png" width="700"/>

> *Production-only parameters `session_key`, `verification`, `data` — none present in the public GitHub repository*

---

<img src="try-to-delete-true.png" width="700"/>

> *GitHub: 2-part auth. Production: 3-part auth with `session_key = token : base64(address) : base64(viewkey)`*
</div>

---

<br>

## Custom Captcha Deployed — Defeated in Hours

In March 2026, the operator deployed a custom captcha (proof-of-work + slider puzzle + trajectory tracking). The code reveals a **second developer** — properly commented JavaScript with numbered steps, `// FIX:` annotations, modern patterns. The original theft code has zero comments.

**Captcha was reverse-engineered and defeated within hours. 100% bypass rate.**

<div align="center">
<a href="https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-xmrwallet-captcha-defeated.html"><img src="https://img.shields.io/badge/READ-Captcha_Reverse_Engineered-FF0000?style=for-the-badge" alt="Captcha Defeated"></a>
</div>

---

<br>

## Victim Reports

| Amount | Source | Quote |
|:------:|:------:|:------|
| **590 XMR** (~$177,000) | Sitejabber | *"deposited 590 monero — 2 days gone"* |
| **17.44 XMR** | Trustpilot | TxID & TX Key documented |
| **20 XMR** | Sitejabber | *"put 20 xmr — next day 0 xmr"* |
| **$200** | Trustpilot | *"stole $200, leaving me high and dry"* |
| Unknown | Trustpilot | *"transferred to some other wallet instead of mine"* |
| Unknown | Trustpilot | *"cannot verify transaction using private viewing key"* |

<br>

> Conservative estimate: **10,000–50,000+ wallets created** over 8 years. Total stolen: **5,000–50,000+ XMR** ($1.5M–$15M+ at historical prices).

---

<br>

## 8 Years. 21+ Deleted Issues. Zero Rebuttals.

In 8 years of operation the operator has **never once** produced:

| What we asked | What we got |
|:--------------|:-----------:|
| Network capture proving viewkey is NOT sent to server | Nothing |
| Code proving signed TX IS broadcast (not `raw = 0`) | Nothing |
| Explanation for `session_key` containing `base64(viewkey)` | Nothing |
| Explanation for backdoor session `8de50123dab32` | Nothing |
| Explanation for `swept` TX type (not in Monero) | Nothing |
| Any technical counter-argument of any kind | **Nothing. Ever.** |

---

<br>

## Summary of Findings

| Finding | Status |
|:--------|:------:|
| Private view key sent to server in plaintext | **CONFIRMED** |
| `session_key` encodes viewkey — re-sent 40+ times per session | **CONFIRMED** |
| `raw_tx_and_hash.raw = 0` — client TX discarded, server redirects funds | **CONFIRMED** |
| 4 Google trackers (GTM, UA, GA4, DoubleClick) inside wallet | **CONFIRMED** |
| GitHub repo has 5.3-year commit gap (2018–2024) | **CONFIRMED** |
| Operator banned from r/Monero, deleted 21+ GitHub issues | **CONFIRMED** |
| 4 escape domains — 2 suspended, 1 DNS dead, 1 active | **CONFIRMED** |
| Custom captcha deployed — reverse-engineered and defeated | **CONFIRMED** |
| New developer involved — code comments prove second author | **CONFIRMED** |
| 50+ paid SEO articles, zero donation wallet | **CONFIRMED** |
| NameSilo fabricated "compromise" story — operator's emails prove it | **CONFIRMED** |
| Operator said "subpoena the registrar" BEFORE abuse report filed | **CONFIRMED** |
| NameSilo helped operator remove VirusTotal warnings | **CONFIRMED** |

---

<br>

## Operator Profile

| | |
|:--|:--|
| **Name** | Nathalie Roy |
| **GitHub** | [nathroy](https://github.com/nathroy) (ID: 39167759) |
| **Email** | admin@xmrwallet.com · royn5094@protonmail.com |
| **Reddit** | u/WiseSolution — **banned from r/Monero** |
| **Twitter** | @xmrwalletcom |
| **Domain paid until** | 2031 |
| **Commit gap** | 2018-11-06 → 2024-03-15 (**5.3 years — zero commits**) |

<br>

**Cover-up pattern:**
- Banned from r/Monero after self-promotion (2018)
- Deleted GitHub Issue #13 (victim report)
- Deleted Issues #35 + #36 (full investigation)
- 50+ paid SEO articles to bury negative reviews
- Zero donation wallet — "volunteer project" funded by stolen XMR
- Standard deflection: *"sync problem"* (funds already stolen)

---

<br>

## Infrastructure IOCs

<details>
<summary><b>Domains, IPs, indicators</b></summary>

<br>

| Type | Value | Notes |
|:-----|:------|:------|
| Domain | `xmrwallet.com` | NameSilo, paid until 2031 |
| Domain | `xmrwallet.me` | Key-Systems, 10yr — **ACTIVE** |
| Domain | `xmrwallet.net` | NICENIC, 10yr — **DNS DEAD** |
| Domain | `xmrwallet.cc` | PDR — **SUSPENDED** |
| Domain | `xmrwallet.biz` | WebNic — **SUSPENDED** |
| Tor v3 | `xmrtor3fsapuu6y26za7vpzox4vpaj6ny5viq2arbmozm7kg6jitnlid.onion` | Active |
| IP | `186.2.165.49` | xmrwallet.com — AS59692 IQWeb |
| IP | `190.115.31.40` | .net (recycled from .biz) — AS59692 |
| IP | `185.129.100.248` | .me (recycled from .cc) — AS57724 DDoS-Guard |
| MX | `mx1/mx2.privateemail.com` | Same across all domains |
| NS | `ns1/ns2.ddos-guard.net` | Same across all domains |
| Cookies | `__ddg8_` `__ddg9_` `__ddg10_` `__ddg1_` | DDoS-Guard |
| Analytics | `UA-116766241-1` | Google Analytics |
| session_key | `[blob]:[b64_address]:[b64_viewkey]` | Key exfiltration |
| TX marker | `type == 'swept'` | Server-initiated theft |
| Backdoor | `/support_login.html` `session_id=8de50123dab32` | Not user-initiated |

</details>

<br>

<div align="center">

[![VirusTotal](https://img.shields.io/badge/VirusTotal-Multiple_Vendors-FF0000?style=flat-square&logo=virustotal)](https://www.virustotal.com/gui/domain/www.xmrwallet.com)
[![URLQuery](https://img.shields.io/badge/URLQuery-Network_Capture-FF0000?style=flat-square)](https://urlquery.net/report/a56ea134-19f0-467f-88c3-3444f5c49c06)
[![ScamAdviser](https://img.shields.io/badge/ScamAdviser-Low_Trust-FF0000?style=flat-square)](https://www.scamadviser.com/check-website/xmrwallet.com)

</div>

---

<br>

## Full Timeline

<details>
<summary><b>Expand full investigation timeline</b></summary>

```
──── PHASE 0: THE SCAM (2016–2025) ──────────────────────────────────────

2016-08-29  xmrwallet.com registered — scam begins
2016–2025   Thousands of wallets, view keys silently exfiltrated
            Victims on Trustpilot, Sitejabber, Reddit
            Operator u/WiseSolution banned from r/Monero
            50+ paid SEO articles to bury victims
            GitHub repo stale 5.3 years — production code evolves separately

──── PHASE 1: EXPOSURE (Feb 2026) ───────────────────────────────────────

2026-02-04  xmrwallet.cc registered secretly — 8yr prepaid
2026-02-09  xmrwallet.biz registered secretly — 5yr prepaid
2026-02-13  Issue #35 published — TX hijacking exposed
            session_key = base64(viewkey), raw_tx_and_hash.raw = 0
2026-02-18  Issue #36 published — live network capture
            43 viewkey transmissions, 4 Google trackers

──── PHASE 1.5: OPERATOR EMAILS (Feb 16–23) ────────────────────────────

2026-02-16  "We don't store seeds or keys" — LIE
2026-02-17  "This is the data we need" — contradicts himself
2026-02-17  "Subpoena the registrar" — BEFORE abuse report filed
2026-02-23  "Hired a lawyer" — same day domains suspended. Never appeared.

──── PHASE 2: FIRST TAKEDOWNS (Feb 23) ─────────────────────────────────

2026-02-23  xmrwallet.cc  SUSPENDED by PDR
2026-02-23  xmrwallet.biz SUSPENDED by WebNic
2026-02-23  Operator deletes Issues #35 + #36 from GitHub

──── PHASE 3: NEW ESCAPE DOMAINS (Feb 26) ──────────────────────────────

2026-02-26  xmrwallet.net registered — 10yr — same IP as .biz
2026-02-26  xmrwallet.me  registered — 10yr — same IP as .cc
            Zero GitHub commits. Same theft infrastructure.

──── PHASE 4: CAPTCHA (Mar 2026) ───────────────────────────────────────

2026-03     Custom captcha deployed (PoW + slider + trajectory)
            Second developer identified via code comments
            Captcha defeated within hours — 100% bypass

──── PHASE 5: CONTINUED TAKEDOWNS (Mar 2026) ──────────────────────────

2026-03-08  xmrwallet.net DNS DEAD — 10yr registration wasted

──── PHASE 6: NAMESILO COVER-UP (Mar 2026) ────────────────────────────

2026-03-04  NameSilo: "The registrant is the victim"
            Zero evidence. Fabricated "compromise" story.
2026-03-04  NameSilo helps remove VirusTotal warnings
2026-03-16  Medium + dev.to articles published
            NameSilo cover-up page published

──── SCOREBOARD ────────────────────────────────────────────────────────

  xmrwallet.cc   SUSPENDED   (8yr prepaid — wasted)
  xmrwallet.biz  SUSPENDED   (5yr prepaid — wasted)
  xmrwallet.net  DNS DEAD    (10yr prepaid — wasted)
  xmrwallet.me   ACTIVE      (next target)
  xmrwallet.com  ACTIVE      (NameSilo protecting)

  Escape domains neutralized:  3 / 4
  Years of registration wasted:  23 years
```

</details>

---

<br>

## He Will Cry, Threaten, and Lie

> The operator will contact you from `royn5094@protonmail.com` or xmrwallet.com addresses. He will claim innocence, threaten legal action, and play the victim. **Do not engage.**

| What he says | Reality |
|:-------------|:--------|
| *"I am a volunteer, xmrwallet is free"* | Zero donation wallet. $550+/month hosting funded by stolen XMR. |
| *"This is defamation, I will sue"* | Never produced a single technical rebuttal in 8 years. |
| *"You used a phishing clone"* | Identical theft code runs on 3 domains + Tor. |
| *"It's a sync problem"* | The "sync" sends your viewkey to his server 40+ times. |
| *"Remove this or else"* | Every threatening email is archived. |

**If you receive messages from the operator:** do not respond, screenshot everything, forward to law enforcement, [report to us](https://github.com/phishdestroy/DO-NOT-USE-xmrwallet-com/issues).

---

<br>

## Report Abuse

<div align="center">

| | Platform | Link |
|:--:|:---------|:-----|
| | **ICANN Complaint** | **[icann.org/compliance/complaint](https://www.icann.org/compliance/complaint)** — bypass NameSilo |
| | Google Safe Browsing | [safebrowsing.google.com](https://safebrowsing.google.com/safebrowsing/report_phish/) |
| | Netcraft | [report.netcraft.com](https://report.netcraft.com) |
| | FBI IC3 | [ic3.gov](https://ic3.gov) |
| | FTC | [reportfraud.ftc.gov](https://reportfraud.ftc.gov) |
| | Action Fraud (UK) | [actionfraud.police.uk](https://www.actionfraud.police.uk) |
| | Interpol | [interpol.int/Crimes/Cybercrime](https://www.interpol.int/Crimes/Cybercrime) |
| | VirusTotal | [virustotal.com](https://www.virustotal.com/gui/domain/xmrwallet.com) |
| | NameSilo (.com) | abuse@namesilo.com — **sided with operator** |
| | Key-Systems (.me) | abuse@key-systems.net |
| | DDoS-Guard | abuse@ddos-guard.net |

</div>

---

<br>

## Safe Alternatives

> **Never use a web wallet that asks for your private key or seed phrase.**

| Wallet | Platform | Link |
|:-------|:---------|:-----|
| **Monero GUI/CLI** | Desktop (Official) | [getmonero.org/downloads](https://getmonero.org/downloads) |
| **Feather Wallet** | Desktop | [featherwallet.org](https://featherwallet.org) |
| **Monerujo** | Android | [monerujo.io](https://monerujo.io) |
| **Cake Wallet** | iOS / Android | [cakewallet.com](https://cakewallet.com) |

---

<br>

## Articles & Publications

| Platform | Article |
|:---------|:--------|
| **Medium** | [xmrwallet.com — Full Investigation](https://phishdestroy.medium.com/xmrwallet-com-2953f35b8a79) |
| **dev.to** | [xmrwallet.com Scam Exposed](https://dev.to/phishdestroy/xmrwallet-com-scam) |
| **GitHub Pages** | [Full Evidence Page](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/) |
| **NameSilo Analysis** | [NameSilo Lied — Email Proof](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-namesilo-xmrwallet-coverup.html) |

<br>

### Site Pages

| Page | Description |
|:-----|:------------|
| [xmrwallet.com Scam Exposed](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-xmrwallet-scam-exposed.html) | Technical theft mechanism |
| [NameSilo Lied — Operator Emails Prove It](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-namesilo-xmrwallet-coverup.html) | NameSilo cover-up analysis |
| [Is xmrwallet.com Safe? No.](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-is-xmrwallet-safe.html) | Technical proof |
| [Nathalie Roy: The Operator](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-nathalie-roy-xmrwallet.html) | Identity & evidence |
| [Operator Deletes Evidence](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-xmrwallet-deleted-evidence.html) | 21+ issues erased |
| [Safe Monero Wallets](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-xmrwallet-alternatives.html) | Trusted alternatives |
| [Captcha Defeated](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/posts/post-xmrwallet-captcha-defeated.html) | Reverse-engineered |
| [Deleted Issues Archive](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/deleted.html) | Full cached evidence |

<br>

### PDF Documents

| Document | Link |
|:---------|:-----|
| Technical Evidence Report | [xmrwallet-scam-evidence-report.pdf](docs/pdf/xmrwallet-scam-evidence-report.pdf) |
| Deleted Evidence Timeline | [xmrwallet-deleted-evidence-timeline.pdf](docs/pdf/xmrwallet-deleted-evidence-timeline.pdf) |
| Victim Advisory | [xmrwallet-victim-advisory.pdf](docs/pdf/xmrwallet-victim-advisory.pdf) |

---

<br>

## Related Projects

| Project | Description |
|:--------|:------------|
| [**destroylist**](https://github.com/phishdestroy/destroylist) | 70,000+ malicious domain blocklist ![](https://img.shields.io/github/stars/phishdestroy/destroylist?style=flat-square&color=FF0000) |
| [**ScamIntelLogs**](https://github.com/phishdestroy/ScamIntelLogs) | Intel archive of crypto scam operations ![](https://img.shields.io/github/stars/phishdestroy/ScamIntelLogs?style=flat-square&color=FF0000) |

---

<br>

<div align="center">

### Connect

[![Website](https://img.shields.io/badge/WEBSITE-phishdestroy.io-FF0000?style=for-the-badge)](https://phishdestroy.io)
[![Telegram](https://img.shields.io/badge/TELEGRAM-@destroy__phish-000000?style=for-the-badge&logo=telegram)](https://t.me/destroy_phish)
[![Twitter](https://img.shields.io/badge/TWITTER-@Phish__Destroy-000000?style=for-the-badge&logo=x)](https://x.com/Phish_Destroy)
[![Medium](https://img.shields.io/badge/MEDIUM-phishdestroy-000000?style=for-the-badge&logo=medium)](https://phishdestroy.medium.com)
[![Bot](https://img.shields.io/badge/BOT-PhishDestroy__bot-000000?style=for-the-badge&logo=telegram)](https://t.me/PhishDestroy_bot)
[![API](https://img.shields.io/badge/API-destroy.tools-FF0000?style=for-the-badge)](https://api.destroy.tools)

<br>

---

**Scammers delete evidence. We preserve it.**

*PhishDestroy — [phishdestroy.io](https://phishdestroy.io)*

<br>

This repository contains evidence of criminal activity published for research, public safety, and law enforcement purposes. Data provided as-is. Independent verification recommended.

</div>
