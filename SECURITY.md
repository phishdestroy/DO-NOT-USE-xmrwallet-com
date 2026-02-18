# Security Policy & Reporting

This repository documents confirmed security issues with **www.xmrwallet.com**.

If you have been affected by this service or have additional technical findings,
this file explains who to contact and how.

---

## I lost funds on xmrwallet.com — what do I do?

### Step 1 — Secure your evidence immediately

Before doing anything else, collect and save:

- [ ] Your **wallet address** (the one you used on xmrwallet.com)
- [ ] Your **seed phrase** (if you have it — store offline, never share)
- [ ] **Transaction IDs (TxID)** of deposits you made
- [ ] **TX Key** if you have it (proves you sent a specific transaction)
- [ ] **Screenshots** of your wallet balance before and after
- [ ] **Browser history / timestamps** showing when you used the site
- [ ] Any **email correspondence** with xmrwallet.com support
- [ ] Your **IP address logs** if available (check your router or VPN)

The more evidence you have, the stronger any legal action becomes.

---

### Step 2 — Verify the loss independently

Check your wallet address on a public Monero explorer to confirm transaction history:

- https://xmrchain.net
- https://localmonero.co/blocks
- https://monero.observer

Enter your wallet address or TxID. This gives you an independent record
that cannot be altered by xmrwallet.com.

---

### Step 3 — Report to authorities

#### 🇺🇸 United States
| Agency | URL | What to report |
|--------|-----|----------------|
| FBI Internet Crime Complaint Center (IC3) | https://ic3.gov | Crypto fraud, fund theft |
| FTC (Federal Trade Commission) | https://reportfraud.ftc.gov | Consumer fraud |
| CISA (Cybersecurity) | https://www.cisa.gov/report | Cyber incidents |
| Secret Service (crypto fraud) | https://www.secretservice.gov/investigation | Large-scale crypto theft |

#### 🇬🇧 United Kingdom
| Agency | URL |
|--------|-----|
| Action Fraud | https://www.actionfraud.police.uk |
| National Cyber Security Centre | https://www.ncsc.gov.uk/section/about-ncsc/report-an-incident |
| Financial Conduct Authority | https://www.fca.org.uk/consumers/report-scam |

#### 🇪🇺 European Union
| Agency | URL |
|--------|-----|
| Europol | https://www.europol.europa.eu/report-a-crime/report-cybercrime-online |
| Your national CERT | https://www.enisa.europa.eu/topics/incident-response/csirts-map |

#### 🇨🇦 Canada
| Agency | URL |
|--------|-----|
| Canadian Anti-Fraud Centre | https://www.antifraudcentre-centreantifraude.ca |
| RCMP | https://www.rcmp-grc.gc.ca/en/contact-us |

#### 🌍 International / General
| Agency | URL |
|--------|-----|
| Interpol cybercrime | https://www.interpol.int/Crimes/Cybercrime |
| IFCCE (crypto fraud) | https://ifcce.org |

---

### Step 4 — Report the domain for takedown

| Platform | URL | Notes |
|----------|-----|-------|
| Google Safe Browsing | https://safebrowsing.google.com/safebrowsing/report_phish/ | Blocks in Chrome/Firefox |
| Netcraft | https://report.netcraft.com | Widely used by ISPs/registrars |
| PhishTank | https://phishtank.org/add_web_phish.php | Community blocklist |
| APWG (Anti-Phishing Working Group) | https://apwg.org/reportphishing/ | Industry coalition |
| Spamhaus | https://www.spamhaus.org/organization/contact/ | DNS blocklist |
| VirusTotal | https://www.virustotal.com/gui/domain/xmrwallet.com | Aggregate scanner |
| URLScan.io | https://urlscan.io/search/#domain:xmrwallet.com | Public scan record |
| SURBL | https://www.surbl.org/surbl-analysis?d=xmrwallet.com | Email/URL blocklist |

#### Report to the domain registrar directly

Current registrar for xmrwallet.com: **NameCheap** (as of last WHOIS check)

- NameCheap abuse: https://www.namecheap.com/legal/general/abuse-policy/
- Email: abuse@namecheap.com

#### Report to hosting / infrastructure

Hosting: **DDoS-Guard (AS59692)** — 186.2.165.49

- DDoS-Guard abuse: https://ddos-guard.net/en/abuse
- Email: abuse@ddos-guard.net

> Note: DDoS-Guard is an offshore provider with a history of hosting
> abuse-resistant infrastructure. Response may be slow or absent.
> Document your report submission regardless.

---

### Step 5 — Contact us

If you have:
- Confirmed fund loss from xmrwallet.com
- Additional technical evidence (logs, traffic captures, screenshots)
- Information about the operators
- Willingness to cooperate in a formal legal process

Open a GitHub issue here:
**https://github.com/XMRWallet/Website/issues**

Or reference our existing investigation threads:
- https://github.com/XMRWallet/Website/issues/36
- https://github.com/XMRWallet/Website/issues/35

All reports are handled confidentially. We do not publish personal information
without explicit consent.

---

## I found a new technical vulnerability or evidence

Open an issue on this repository with:

1. Description of the finding
2. Steps to reproduce
3. Any captured evidence (traffic logs, screenshots, code)
4. Your contact preference

We treat all technical submissions seriously and will credit researchers
who contribute verified findings.

---

## Reporting timeline

| Date | Event |
|------|-------|
| 2026-02-18 | Live traffic capture conducted, view key exfiltration confirmed |
| 2026-02-18 | Technical analysis published (issues #35, #36) |
| 2026-02-18 | This repository forked and security documentation created |
| Ongoing | Collecting victim reports and additional evidence |

---

## Do NOT

- ❌ Do not send funds to xmrwallet.com under any circumstances
- ❌ Do not enter your seed phrase anywhere on the site
- ❌ Do not trust "recovery services" that contact you after reporting loss
  (these are almost always secondary scams targeting victims)
- ❌ Do not pay anyone claiming they can recover your Monero for a fee

---

*PhishDestroy Research | https://github.com/phishdestroy/destroylist*
