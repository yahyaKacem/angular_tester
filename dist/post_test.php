<?php
  $bootstrap    = "http://localhost/libraries/bootstrap";
  $font_awesome = $bootstrap . "/FortAwesome-Font-Awesome-13d5dd3/css/";
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <link
    rel="stylesheet"
    href="<?php echo $bootstrap; ?>/css/bootstrap.min.css"
  >
  <link
    rel="stylesheet"
    href="<?php echo $font_awesome; ?>font-awesome.min.css"
  >
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <form action="post.php" method="POST" class="container well">
    <p><input name="name" autofocus></p>
    <p>
      <button class="btn btn-primary" type="submit">
        <i class="icon-save"></i>
      </button>
    </p>
  </form>
</body>
</html>
