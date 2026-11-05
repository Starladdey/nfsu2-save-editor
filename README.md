# NFS Underground 2 — Save Editor (Web)

Browser-based utility for editing **Need for Speed: Underground 2** career save files. All file parsing and modifications happen locally in your browser - saves are never uploaded to any server.

## Web Version
- **Live Editor:** [nfsu2.divon.eu](https://nfsu2.divon.eu/)

![NFS Underground 2 Save Editor preview](assets/web.png)

## Features (v1.1)
- **Profile & Cash:** Rename your career profile (up to 7 ASCII characters) and edit your bank balance.
- **Career Garage (Slots 1–5) & GARAGE.DAT (Slots 6–10):**
  - Unlock all 5 career garage slots at any point in the game (even on a fresh Stage 1 save).
  - Support for external `GARAGE.DAT` files (Slots 6–10 used by `nfsu2.xyz` and Extra Options).
  - Accurate vehicle identification by internal model hash.
- **Performance, Outrun Uniques & Dyno:**
  - Switch any car between *Stock*, *Street (Lvl 1)*, *Pro (Lvl 2)*, and *Extreme (Lvl 3)* tuning levels.
  - Toggle all **9 Outrun Unique upgrades** (*Weight, Trans, NOS, Engine, Turbo, Susp, Brakes, ECU, Tires*) individually per car.
  - Apply quick **Dyno ECU/Turbo presets** (*Peak Horsepower*, *Drag Acceleration*, *Drift Torque*, or *Reset to Stock*).
- **40+ Built-in Car Presets:**
  - Story & Sponsor vehicles (*Rachel's 350Z*, *Caleb's GTO*, *Nikki's Mustang*, *Snoop Dogg's Escalade*, *Capone's H2*).
  - Custom Rivals, Player Builds, EU/US regional exclusives (*Peugeot 106*, *Opel Corsa*, *Honda Civic Si*, *Acura RSX*), and all 26 stock career cars.
- **Career Unlocks & Templates:**
  - **Starter 0% + Unlocked:** Load a clean 0% races save with $999,999, all 5 slots, Car Lot, shops, Stage 3, and 9 Uniques ready to go.
  - **Safe Career Add-ons:** Unlock per-car part tables, all 25 Car Lot vehicles, and hidden shop map icons without skipping active career races.
  - **100% Sandbox Mode:** Apply a 100% completed Stage 5 world while keeping your profile name, cash, and current garage cars.
- **JSON Car Patches & Checksums:**
  - Export and import individual car builds as `.json` files.
  - Automatic header CRC-32 recalculation on save download.

## Backup Note
Always keep a backup of your original save files before editing (you can also enable the **Auto `.bak`** checkbox in the top bar).

## Save File Location (Windows)
Press `Win + R` and paste:
`%LOCALAPPDATA%\NFS Underground 2`

## Running Locally
1. **Web App (PWA):** Open [nfsu2.divon.eu](https://nfsu2.divon.eu/) and install it via your browser's address bar for offline access.
2. **From Archive / Repository:**
   - Download the latest `.zip` from [Releases](https://github.com/Starladdey/nfsu2-save-editor/releases) or clone this repository.
   - Open `index.html` in your browser to load and edit local save files.
   - *Note:* To use the `Try Demo`, `Starter 0%`, or `100% Sandbox` buttons locally, run a local HTTP server in the project folder (for example, `npx serve` or `python -m http.server 8000`), as browsers block `fetch()` requests over `file://`.

## Disclaimer
Unofficial non-commercial fan project. Not affiliated with, endorsed, or sponsored by Electronic Arts Inc. (EA).