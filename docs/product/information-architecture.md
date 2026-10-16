# MVP Information Architecture

## Navigation model

The site should let a visitor identify the professional proposition quickly, then move into evidence at the depth they need. The public navigation remains intentionally small.

| Route | Purpose | Content readiness |
| --- | --- | --- |
| `/` | Home: positioning, concise introduction, selected proof points, and clear calls to action | Structure ready; copy requires approval |
| `/experience` | Verified experience timeline and capability domains | Requires approved chronology and content |
| `/work` | Index of approved case studies | Requires at least one approved case |
| `/work/[slug]` | Individual technical case study | Requires case-specific permission and evidence |
| `/contact` | Approved contact routes and resume action | Requires approved links and resume asset |
| `/es/...` | Spanish equivalents of approved public routes | Requires Spanish review |

## Home page composition

1. Positioning and primary call to action.
2. Three pillars: Build, Design, Lead.
3. Selected work preview, only if at least one approved case exists.
4. Capability-domain summary, avoiding uncurated technology lists.
5. Contact/resume call to action using approved destinations.

## Content model

### Profile

`name`, `headline`, `location`, `introduction`, `capabilityDomains`, `contactLinks`, `resume`, `verificationStatus`, `locale`.

### Experience entry

`organization`, `role`, `startDate`, `endDate`, `summary`, `capabilityTags`, `verificationStatus`, `locale`.

### Case study

`slug`, `title`, `summary`, `context`, `role`, `constraints`, `decision`, `alternatives`, `implementation`, `outcome`, `evidence`, `permissionStatus`, `verificationStatus`, `locale`.

## Content state rules

- Public routes may render only records marked `approved` for the relevant locale.
- Draft, internal, confidential, and unknown records must stay outside public output.
- A missing translation should not silently fall back to unreviewed copy; hide the locale route or label it unavailable until reviewed.
