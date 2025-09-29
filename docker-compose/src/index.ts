import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
    const data = await prisma.user.findMany();

  res.json({
    data
  })
});

app.post("/", async (req, res) => {
    const {username, password} = req.body;
    await prisma.user.create({
        data:{
            username: username,
            password: password
        }
    })
    res.json({
        "message": "post endpoint"
      })
  });
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




// ### **1. Stop and remove old containers & volumes**

// docker-compose down -v

// * **down** → stops and removes running containers from `docker-compose.yml`.
// * **-v** → also deletes the volumes (so Postgres DB is reset).


// ### **2. Rebuild everything from scratch (no cache)**

// docker-compose build --no-cache

// * Rebuilds the images fresh (no old layers).

// ### **3. Start the containers**

// docker-compose up

// * Starts the services and streams logs in the terminal.
// * If you want to run in background mode:


// docker-compose up -d


// ### **4. Check if containers are running**

// ```bash
// docker ps
// ```

// * Shows container IDs, names, ports, and status.
// * Example from your case:

//   ```
//   my_app   → http://localhost:3000
//   my_db    → Port 5432 for Postgres
//   ```

// ---

// ### **5. View logs (optional)**

// ```bash
// docker-compose logs -f
// ```

// * `-f` keeps streaming logs live.

// ---

// ### **6. Stop everything (when done)**

// ```bash
// docker-compose down
// ```

// * If you don’t want to delete volumes (keep DB data), omit `-v`.

// ---

// If you want, I can make you a **single script** so next time you just run:

// ```bash
// ./reset-docker.sh
// ```

// and it’ll do all steps in one go.

