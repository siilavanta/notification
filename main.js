var head = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ani dim</title>
    <link rel="stylesheet" href="style.css">
</head>`;
var txt = `<h2>bh xb sx hsx </h2>`
var form = `<form method="POST" enctype="multipart/form-data">
File to upload: <input type="file" name="uploadfile">&nbsp;&nbsp;
<input type="submit" value="Press to Upload..."> to upload the file!
</form>`
document.head.insertAdjacentHTML('afterbegin', head);
document.body.insertAdjacentHTML('afterbegin', txt);
document.body.insertAdjacentHTML('afterbegin', form);

// token is enable