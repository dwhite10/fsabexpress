// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// dotenv.config();
// import { db } from "./util/FirebaseInit.js";
// import { collection, getDocs, addDoc } from "firebase/firestore"; // <-- Add `addDoc`

// const app = express();
// const port = 8080;

// app.use(express.json());
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//     })
// );

// app.get("/", async (req, res) => {
//     res.send("Hello World!");
// });

// app.get("/students", async (req, res) => {
//     const collectionRef = collection(db, "students");
//     const collectionSnap = await getDocs(collectionRef);
//     const docs = [];
//     collectionSnap.forEach((doc) => {
//         docs.push(doc.data());
//     });
//     res.send(docs);
// });

// app.post("/students", async (req, res) => {
//     try {
//         const { firstName, lastName, classYear, concentrations } = req.body;

//         // Ensure all fields are provided
//         if (!firstName || !lastName || !classYear || concentrations.length === 0) {
//             return res.status(400).send("All fields are required");
//         }

//         const newStudent = { firstName, lastName, classYear, concentrations };

//         // Add the new student to the "students" collection
//         await addDoc(collection(db, "students"), newStudent);

//         res.status(200).send("Student added successfully!");
//     } catch (error) {
//         console.error("Error adding student:", error);
//         res.status(500).send("Failed to add student");
//     }
// });

// app.listen(port, () => {
//     console.log("Listening on port", port);
// });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// dotenv.config();
// import { db } from "./util/FirebaseInit.js";
// import { collection, getDocs, addDoc } from "firebase/firestore";

// const app = express();
// const port = 8080;

// app.use(express.json());
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//     })
// );

// app.get("/", async (req, res) => {
//     res.send("Hello World!");
// });

// // Fetch baseball players instead of students
// app.get("/baseballPlayers", async (req, res) => {
//     const collectionRef = collection(db, "baseballPlayers");
//     const collectionSnap = await getDocs(collectionRef);
//     const docs = [];
//     collectionSnap.forEach((doc) => {
//         docs.push(doc.data());
//     });
//     res.send(docs);
// });

// // Add new baseball player instead of student
// app.post("/baseballPlayers", async (req, res) => {
//     try {
//         const { firstName, lastName, classYear, concentrations } = req.body;

//         if (!firstName || !lastName || !classYear || concentrations.length === 0) {
//             return res.status(400).send("All fields are required");
//         }

//         const newPlayer = { firstName, lastName, classYear, concentrations };

//         // Add the new baseball player to the "baseballPlayers" collection
//         await addDoc(collection(db, "baseballPlayers"), newPlayer);

//         res.status(200).send("Baseball player added successfully!");
//     } catch (error) {
//         console.error("Error adding player:", error);
//         res.status(500).send("Failed to add player");
//     }
// });

// app.listen(port, () => {
//     console.log("Listening on port", port);
// });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// dotenv.config();
// import { db } from "./util/FirebaseInit.js";
// import { collection, getDocs, addDoc } from "firebase/firestore";

// const app = express();
// const port = 8080;

// app.use(express.json());
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//     })
// );

// app.get("/", async (req, res) => {
//     res.send("Hello World!");
// });

// // Fetch baseball players instead of students
// app.get("/baseballPlayers", async (req, res) => {
//     const collectionRef = collection(db, "baseballPlayers");
//     const collectionSnap = await getDocs(collectionRef);
//     const docs = [];
//     collectionSnap.forEach((doc) => {
//         docs.push(doc.data());
//     });
//     res.send(docs);
// });

// // Add new baseball player instead of student
// app.post("/baseballPlayers", async (req, res) => {
//     try {
//         const { firstName, lastName, year, battingAverage } = req.body;

//         // Ensure all fields are provided
//         if (!firstName || !lastName || !year || battingAverage === undefined) {
//             return res.status(400).send("All fields are required");
//         }

//         const newPlayer = { firstName, lastName, year, battingAverage };

//         // Add the new baseball player to the "baseballPlayers" collection
//         await addDoc(collection(db, "baseballPlayers"), newPlayer);

//         res.status(200).send("Baseball player added successfully!");
//     } catch (error) {
//         console.error("Error adding player:", error);
//         res.status(500).send("Failed to add player");
//     }
// });

// app.listen(port, () => {
//     console.log("Listening on port", port);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { db } from "./util/FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

const app = express();
const port = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/", async (req, res) => {
    res.send("Hello World!");
});

// Fetch baseball players from the collection
app.get("/baseballPlayers", async (req, res) => {
    try {
        const collectionRef = collection(db, "baseballPlayers");
        const collectionSnap = await getDocs(collectionRef);
        const docs = [];
        collectionSnap.forEach((doc) => {
            docs.push(doc.data());
        });
        res.status(200).json(docs);
    } catch (error) {
        console.error("Error fetching players:", error);
        res.status(500).send("Failed to fetch players");
    }
});

// Add a new baseball player to the collection
app.post("/baseballPlayers", async (req, res) => {
    try {
        const { firstName, lastName, year, battingAverage } = req.body;

        // Ensure all fields are provided
        if (!firstName || !lastName || !year || battingAverage === undefined) {
            return res.status(400).send("All fields are required");
        }

        const newPlayer = { firstName, lastName, year, battingAverage };

        // Add the new baseball player to the "baseballPlayers" collection
        await addDoc(collection(db, "baseballPlayers"), newPlayer);

        res.status(200).send("Baseball player added successfully!");
    } catch (error) {
        console.error("Error adding player:", error);
        res.status(500).send("Failed to add player");
    }
});

app.listen(port, () => {
    console.log("Listening on port", port);
});