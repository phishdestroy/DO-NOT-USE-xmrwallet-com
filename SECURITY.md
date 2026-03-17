# Security Policy & Reporting

This repository documents confirmed security issues with **www.xmrwallet.com**.

If you have been affected by this service or have additional technical findings,
this file explains who to contact and how.

---

## NameSilo is covering for the operator

Three registrars independently suspended the operator's domains after reviewing the same evidence. **NameSilo** was the only registrar that refused to act — and went further by claiming the site was "compromised" (hacked by a third party).

The operator's own emails to PhishDestroy, written **before** NameSilo got involved, contradict this story:

| Date | Operator's words | What it proves |
|------|-----------------|----------------|
| Feb 16 | "We don't store seeds or keys, everything is done in your browser locally." | First person — "we" — his site, his code |
| Feb 17 | "This is the data we need to offer the service." | Admits data collection 24hrs after denying it |
| Feb 17 | "Feel free to subpoena the domain registrar for my information." | Knew NameSilo would protect him — before any abuse report was filed |
| Feb 23 | "I've hired a lawyer and a private investigator." | Lawyer never appeared. Sent same day .cc and .biz were suspended |

**NameSilo's "compromise" story was fabricated after the fact.** The operator never mentioned a hack. He defended the code as his own in every email.

- Full investigation: https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/
- Medium article: https://phishdestroy.medium.com/xmrwallet-com-2953f35b8a79
- dev.to article: https://dev.to/phishdestroy/xmrwallet-com-scam
- ICANN complaint: https://www.icann.org/compliance/complaint

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

#### United States
| Agency | URL | What to report |
|--------|-----|----------------|
| FBI Internet Crime Complaint Center (IC3) | https://ic3.gov | Crypto fraud, fund theft |
| FTC (Federal Trade Commission) | https://reportfraud.ftc.gov | Consumer fraud |
| CISA (Cybersecurity) | https://www.cisa.gov/report | Cyber incidents |
| Secret Service (crypto fraud) | https://www.secretservice.gov/investigation | Large-scale crypto theft |

#### United Kingdom
| Agency | URL |
|--------|-----|
| Action Fraud | https://www.actionfraud.police.uk |
| National Cyber Security Centre | https://www.ncsc.gov.uk/section/about-ncsc/report-an-incident |
| Financial Conduct Authority | https://www.fca.org.uk/consumers/report-scam |

#### European Union
| Agency | URL |
|--------|-----|
| Europol | https://www.europol.europa.eu/report-a-crime/report-cybercrime-online |
| Your national CERT | https://www.enisa.europa.eu/topics/incident-response/csirts-map |

#### Canada
| Agency | URL |
|--------|-----|
| Canadian Anti-Fraud Centre | https://www.antifraudcentre-centreantifraude.ca |
| RCMP | https://www.rcmp-grc.gc.ca/en/contact-us |

#### International / General
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

Current registrar for xmrwallet.com: **NameSilo** (confirmed via WHOIS)

- NameSilo abuse: https://www.namesilo.com/report-abuse
- Email: abuse@namesilo.com

> **Warning:** NameSilo has already been provided with full technical evidence and sided with the operator. File an ICANN complaint instead: https://www.icann.org/compliance/complaint

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

Contact PhishDestroy:
- GitHub: https://github.com/phishdestroy
- Website: https://phishdestroy.io
- Medium: https://phishdestroy.medium.com
- Twitter/X: https://x.com/Phish_Destroy

Or reference our investigation (operator deleted originals — full archive preserved):
- https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/deleted.html
- Issue #35 cached copy (full HTML): https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/cache-issue35/
- Issue #36 cached copy (full HTML): https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/cache-issue36/

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
| 2026-02-13 | PhishDestroy investigation published |
| 2026-02-16 | Operator emails PhishDestroy: "We don't store seeds or keys" |
| 2026-02-17 | Operator contradicts himself: "This is the data we need" |
| 2026-02-17 | Operator: "Feel free to subpoena the domain registrar" |
| 2026-02-18 | Live traffic capture conducted, view key exfiltration confirmed |
| 2026-02-18 | Technical analysis published (issues #35, #36) |
| 2026-02-18 | This repository forked and security documentation created |
| 2026-02-23 | xmrwallet.cc SUSPENDED (PDR registrar) |
| 2026-02-23 | xmrwallet.biz SUSPENDED (WebNic registrar) |
| 2026-02-23 | Operator panics: "I've hired a lawyer and a private investigator" |
| 2026-02-23 | **Operator deleted Issues #35 + #36 after suspensions** |
| 2026-02-23 | Full evidence archived: [deleted.html](https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/deleted.html) |
| 2026-02-26 | Operator registers escape domains: xmrwallet.net, xmrwallet.me (10yr prepaid each) |
| 2026-03-04 | NameSilo claims site was "compromised" — contradicted by operator's own emails |
| 2026-03-04 | NameSilo helps operator remove VirusTotal warnings |
| 2026-03-16 | Medium and dev.to articles published with full email evidence |
| Ongoing | Collecting victim reports and additional evidence |

---

## Do NOT

- Do not send funds to xmrwallet.com under any circumstances
- Do not enter your seed phrase anywhere on the site
- Do not trust "recovery services" that contact you after reporting loss
  (these are almost always secondary scams targeting victims)
- Do not pay anyone claiming they can recover your Monero for a fee

---

*PhishDestroy Research | https://phishdestroy.io | https://github.com/phishdestroy*
