#!/usr/bin/env bash
# Render the C4 PlantUML sources to PNG using the public Kroki service.
# Usage: ./render.sh
set -euo pipefail

cd "$(dirname "$0")"
KROKI_URL="${KROKI_URL:-https://kroki.io}"

for source in ./*.puml; do
    output="${source%.puml}.png"
    printf 'Rendering %s -> %s\n' "$source" "$output"
    curl --fail --silent --show-error --max-time 60 \
        -H 'Content-Type: text/plain' \
        --data-binary "@${source}" \
        "${KROKI_URL}/plantuml/png" \
        -o "${output}"
done

printf 'Done.\n'
