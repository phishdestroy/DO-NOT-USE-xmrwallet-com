# Security Policy

## Supported Versions

| Version  | Supported          |
| -------- | ------------------ |
| latest   | :white_check_mark: |
| < latest | :x:                |

---

## ⚠️ Critical Security Warning

**[WARNING]**
This project is associated with a **high-risk wallet implementation** exhibiting behavior consistent with fund compromise.

---

## 🚨 Verified Technical Risks

Based on independent technical analysis:

* **Server-side transaction control**
  Client-generated transactions are discarded:

  ```js
  raw_tx_and_hash.raw = 0
  ```

  The server rebuilds and broadcasts transactions.

* **Full transaction hijacking capability**
  Server receives only metadata:

  ```json
  {amount, address, payment_id, fee}
  ```

  → Destination address can be silently modified.

* **Sensitive data exposure**

  * Private view key transmitted
  * Address + keys embedded in `session_key`
  * Seed phrases observed in network requests (`login.php`)

* **Authentication leakage**

  * `verification` parameter uses spend key signature
  * Server receives cryptographic proof of key ownership

* **Hidden backend logic**

  * Critical parameters not present in public GitHub code:

    * `session_key`
    * `verification`
    * `data` (encrypted payload)

* **Fake transaction records**

  ```js
  type == 'swept'
  ```

  * Used to represent server-initiated fund movement
  * Marked with: `Unknown transaction id`

---

## 🧬 Infrastructure Indicators (IOCs)

* Domains:

  * xmrwallet.com
  * [www.xmrwallet.com](http://www.xmrwallet.com)

* IP:

  * 186.2.165.49

* Tracking:

  * Google Analytics: UA-116766241-1

* Hosting:

  * DDoS-Guard (AS59692)
  * Apache/2.4.58 (Ubuntu)
  * PHP 8.2.x

* Related endpoints:

  * auth.php
  * submittransaction.php
  * getbalance.php
  * gettransactions.php

---

## ⚠️ Architecture Red Flags

* No verifiable link between GitHub repo and production
* No reproducible builds or signed releases
* Backend is closed-source
* Production code differs from public repository

**Result:** невозможно проверить, что исполняемый код соответствует опубликованному.

---

## 💣 Impact

**[IMPORTANT]**

Using this wallet may result in:

* Complete loss of funds
* Silent transaction redirection
* Exposure of private keys / seed phrases
* No ability to prove theft (Monero privacy)

---

## 🚫 Recommendation

* Do NOT use this wallet
* Do NOT enter seed phrases or private keys
* Do NOT trust client-side claims

Use only:

* Official Monero wallet
* Audited open-source solutions
* Hardware wallets

---

## 🛡️ Reporting

If you are affected:

1. Collect evidence:

   * Network logs
   * Transaction hashes
   * Wallet addresses

2. Submit reports:

Google Safe Browsing:
[https://safebrowsing.google.com/safebrowsing/report_phish/](https://safebrowsing.google.com/safebrowsing/report_phish/)

Netcraft:
[https://report.netcraft.com](https://report.netcraft.com)

VirusTotal:
[https://www.virustotal.com/gui/domain/xmrwallet.com](https://www.virustotal.com/gui/domain/xmrwallet.com)

URLQuery:
[https://urlquery.net/report/a56ea134-19f0-467f-88c3-3444f5c49c06](https://urlquery.net/report/a56ea134-19f0-467f-88c3-3444f5c49c06)

3. Contact:

* Hosting provider
* National CERT
* Law enforcement

---

## ⚠️ Disclaimer

This repository is provided for research and security analysis purposes.

No guarantee of safety is provided.
Use at your own risk.

---

## 🧠 Summary

Client-side wallet simulation + server-side transaction control = **full compromise model**.

High-confidence malicious design pattern.
