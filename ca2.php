<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Irrigation Labour Registration Form</title>
</head>
<body>
    <h2>Irrigation Labour Registration Form</h2>

    <?php
    // Initialize variables
    $nameErr = $emailErr = $ageErr = "";
    $name = $email = $age = "";

    // Form validation logic
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Name validation (only letters and whitespace allowed)
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
        } elseif (!preg_match("/^[a-zA-Z ]*$/", $_POST["name"])) {
            $nameErr = "Only letters and spaces allowed";
        } else {
            $name = htmlspecialchars($_POST["name"]);
        }

        // Email validation
        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        } else {
            $email = htmlspecialchars($_POST["email"]);
        }

        // Age validation (must be a number between 1 and 120)
        if (empty($_POST["age"])) {
            $ageErr = "Age is required";
        } elseif (!filter_var($_POST["age"], FILTER_VALIDATE_INT, ["options" => ["min_range" => 1, "max_range" => 120]])) {
            $ageErr = "Enter a valid age between 1 and 120";
        } else {
            $age = htmlspecialchars($_POST["age"]);
        }

        // If no errors, display success message
        if (empty($nameErr) && empty($emailErr) && empty($ageErr)) {
            echo "<p>Form submitted successfully!</p>";
            echo "<p>Name: $name</p>";
            echo "<p>Email: $email</p>";
            echo "<p>Age: $age</p>";
        }
    }
    ?>

    <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" value="<?php echo $name; ?>" required>
        <span style="color: red;"><?php echo $nameErr; ?></span>
        <br><br>

        <label for="email">Email: </label>
        <input type="email" id="email" name="email" value="<?php echo $email; ?>" required>
        <span style="color: red;"><?php echo $emailErr; ?></span>
        <br><br>

        <label for="age">Age: </label>
        <input type="number" id="age" name="age" value="<?php echo $age; ?>" required>
        <span style="color: red;"><?php echo $ageErr; ?></span>
        <br><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
