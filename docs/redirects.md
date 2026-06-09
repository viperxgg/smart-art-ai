# Redirect and Gone Audit

This file keeps the old-to-new routing decisions for `smartartai.se`.

## Phase A - implemented

| old URL | action | target | note |
| --- | --- | --- | --- |
| `/en` | 301 | `/` | Swedish-only site now. |
| `/en/om-oss` | 301 | `/om-oss` | Localized legacy about page. |
| `/fynd` | 410 | - | Old product listing without a live category hub yet. |
| `/fynd/:path*` | 410 | - | Old discovery subtree. |
| `/preview/elin-simple` | 410 | - | Internal preview page. |
| Restaurant, QR menu, demo, blog, and StädSync SaaS URLs | 410 | - | Legacy topics do not fit Elins val. |
| `/api/agent-x` | 410 | - | Legacy API. |
| `/api/contact` | 410 | - | Confirmed not wired to the current site before removal. |
| `/api/menu-upload` | 410 | - | Legacy restaurant menu API. |

## Phase B - held until target pages exist

Do not implement these until the final category review pages are live.

| old URL | future action | future target |
| --- | --- | --- |
| `/product/traningsband-4-nivaer` | 301 | `/traning/traningsband-4-nivaer-recension/` |
| `/review/traningsband-4-nivaer` | 301 | `/traning/traningsband-4-nivaer-recension/` |
| `/product/traningsband-4-nivaer/ugc` | 301 | `/traning/traningsband-4-nivaer-recension/` |
| `/product/ninja-blast-portable-blender` | 301 | `/kok/ninja-blast-portable-blender-recension/` |
| `/review/ninja-blast-portable-blender` | 301 | `/kok/ninja-blast-portable-blender-recension/` |
| `/product/ninja-blast-portable-blender/ugc` | 301 | `/kok/ninja-blast-portable-blender-recension/` |
