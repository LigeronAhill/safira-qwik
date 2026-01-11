# https://just.systems

set windows-shell := ["pwsh.exe", "-NoLogo", "-Command"]
set shell := ["zsh", "-c"]
set dotenv-load := true
set quiet := true

# List of commands
default:
    just --list

# Help
[group("app")]
help:
    just --list

# Watch app
[group("app")]
watch: biome-check
    bun run dev

# Create new component
[group("qwik")]
component NAME:
    bun run qwik new --barrel {{ NAME }}

# Create new route
[group("qwik")]
route PATH:
    bun run qwik new /{{ PATH }}

# Format, lint and organize imports of all files
[group("biome")]
biome-check:
    bunx biome check --write

# Format all files
[group("biome")]
biome-fmt:
    bunx biome format --write

# Lint and apply safe fixes to all files
[group("biome")]
biome-lint:
    bunx biome lint --write

# Commit changes
[group("git")]
commit NAME: biome-check
    git add .
    git commit -m "{{ NAME }}"
