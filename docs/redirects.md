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

## Phase B - product redirects and removals

Träningsband redirects are implemented now that the canonical page exists. Ninja
Blast was later removed because it is off-niche for the health / beauty / sports
focus and should deindex with 410 rather than redirecting to an unrelated page.

| old URL | action | target | status |
| --- | --- | --- | --- |
| `/product/traningsband-4-nivaer` | 301 | `/traning/traningsband-naturlatex` | Implemented |
| `/review/traningsband-4-nivaer` | 301 | `/traning/traningsband-naturlatex` | Implemented |
| `/product/traningsband-4-nivaer/ugc` | 301 | `/traning/traningsband-naturlatex` | Implemented |
| `/product/ninja-blast-portable-blender` | 410 | - | Removed: off-niche kitchen product. |
| `/review/ninja-blast-portable-blender` | 410 | - | Removed: off-niche kitchen product. |
| `/product/ninja-blast-portable-blender/ugc` | 410 | - | Removed: off-niche kitchen product. |
