require("dotenv").config();
const expree =reqiure("express");
const cors =reqiure("cors");
const path = require("path");

const app =express();

app.use(
    cors({
        origin:process.envClIENT_URL || "+",
        method: ["GET","POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));