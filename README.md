# CWSP-process

SKU **Work Center** и AI-обработки: очередь задач, распознавание и document pipeline. На хосте артефакт `workcenter` (`/workcenter`). HTTP API процесса живёт в runtime (`/api/process`), не в этом пакете.

Не путать с CWSP-document (Markdown viewer) и CWSP-transfer (clipboard / gateway).

## Поверхности

| Поверхность | Скрипт |
| --- | --- |
| PWA | `npm run dev` / `npm run build` |
| Work Center на хосте | `npm run build:cw-workcenter` |
| Capacitor sibling | `npm run build:capacitor` |

```bash
cd apps/CWSP-process
npm run dev
npm run build:cw-workcenter
npm run build:capacitor
```

UI Work Center SoT: `modules/views/workcenter-view`. Копии под `*/views` не редактировать.
