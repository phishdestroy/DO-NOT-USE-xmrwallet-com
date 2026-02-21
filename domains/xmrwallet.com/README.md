# xmrwallet.com — Primary Scam Domain

**xmrwallet.com** is a fake Monero wallet that steals private view keys and hijacks transactions.

## Quick Facts
| | |
|---|---|
| **Domain** | xmrwallet.com |
| **Status** | 🔴 Active |
| **Operating since** | 2016-08-29 |
| **Expires** | 2031-08-29 |
| **Registrar** | NameSilo LLC |
| **IP** | 186.2.165.49 |
| **ASN** | AS59692 — IQWeb FZ-LLC (Belize) |
| **Hosting** | IQWEB bullet-proof offshore ~$550+/month |
| **CDN** | DDoS-Guard |
| **NS** | ns1/ns2.ddos-guard.net |
| **MX** | mx1/mx2.privateemail.com (Namecheap) |
| **TXT** | google-site-verification=d-En_D3kMw6CqZpPwZeDn4ICI5Tyk1WvPYdVdGzEWr8 |

## Confirmed Malicious Behavior
- View key transmitted to server via `session_key` (Base64) on every API request — 40+ times per session
- Client transaction discarded (`raw_tx_and_hash.raw = 0`) — server builds and broadcasts its own
- `type='swept'` server-side transaction marker — theft signature
- 4 Google trackers inside wallet (GTM · GA · GA4 · DoubleClick)
- `/support_login.html` backdoor with hardcoded `session_id=8de50123dab32`
- 5.3-year GitHub commit gap (2018→2024) — facade repository

## DNS Map
See [DNSDumpster map](../../docs/img/dnsmap-xmrwallet-com.png)

## Related Escape Domains
- [xmrwallet.cc](../xmrwallet.cc/) — registered 2026-02-04
- [xmrwallet.biz](../xmrwallet.biz/) — registered 2026-02-09

## Report Abuse
- abuse@namesilo.com
- abuse@ddos-guard.net
- https://safebrowsing.google.com/safebrowsing/report_phish/
- https://phish.report/

## Full Evidence
https://phishdestroy.github.io/DO-NOT-USE-xmrwallet-com/
