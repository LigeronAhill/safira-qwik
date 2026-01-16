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

# Preview app
[group("app")]
preview:
    bun run preview

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

# Push changes
[group("git")]
push:
    git push

# Generate SQL migration
[group("database")]
drizzle-gen:
    bunx drizzle-kit generate

# Apply generated SQL migration
[group("database")]
drizzle-apply: drizzle-gen
    bunx drizzle-kit migrate

# Push your Drizzle schema to database
[group("database")]
drizzle-push:
    bunx drizzle-kit push

# Pull(introspect) database schema
[group("database")]
drizzle-pull:
    bunx drizzle-kit pull

# check for any race conditions(collisions) of generated migrations
[group("database")]
drizzle-check:
    bunx drizzle-kit check

# Upgrade snapshots of previously generated migrations
[group("database")]
drizzle-up:
    bunx drizzle-kit up

# Convenient database browsing
[group("database")]
drizzle-studio:
    bunx drizzle-kit studio
