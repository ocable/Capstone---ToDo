import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";


const app = express();
const port = 3000;
let list = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get("/", (req, res) => {
    res.render("index.ejs", {newListItem: list});
});

app.post("/", (req, res) => {
    let newItem = req.body["newItem"];
    list.push(newItem);
    res.redirect('/');
    // console.log(newItem);
    console.log(list);
});

app.post("/remove-item", (req, res) => {
    const index = req.body.index;
    list.splice(index, 1);
    console.log(list);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
