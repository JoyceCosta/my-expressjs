const express = require ('express');

const app = express();

app.use('/', (req, resp, next) => {
  console.log('Covid');
  next();
})

app.use('/symptom-1', (req, resp, next) => {
  console.log('first');
  resp.send('<h1>No Smell</h1>');
});

app.use("/symptom-2", (req, resp, next) => {
	console.log("first");
	resp.send("<h1>No Taste</h1>");
});

app.use((req, resp, next) => {
  console.log('whatever "/" page');
  resp.send('<h1>I hate covid</h1>');
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));