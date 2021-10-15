<?php
include '../../config.php';
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
    $itemId= $_POST['itemId'];
    $name= $_POST['name'];
 	$price= $_POST["price"];
    $cat= $_POST['cat'];
    $subCat= $_POST['subCat'];
    $info= $_POST['info'];
    $fabricCost= $_POST['fabricCost'];
    $swingCost= $_POST['swingCost'];
    $factryCost= $_POST['factryCost'];
    $profit= $_POST['profit'];
    $garmentPrice= $_POST['garmentPrice'];
    $xxs= $_POST['xxs'];
    $xs= $_POST['xs'];
    $s= $_POST['s'];
    $m= $_POST['m'];
    $l= $_POST['l'];
    $xl= $_POST['xl'];
    $xxl= $_POST['xxl'];

    $sql = 
    "INSERT INTO `items` (`id`, `name`, `price`, `cat`, `subCat`, `info`, `fabricCost`, `swingCost`, `factryCost`, `profit`, `garmentPrice`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`)
                    VALUES ('$itemId', '$name', '$price', '$cat', '$subCat', '$info', '$fabricCost', '$swingCost', '$factryCost', '$profit', '$garmentPrice', '$xxs', '$xs', '$s', '$m', '$l', '$xl', '$xxl');
    ";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";	
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);

$target_dir = "../../../../img/model/";

$target_file = $target_dir . basename($_FILES["image1"]["name"]);
$imgType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));


$target_file = $target_dir . $itemId.".".$imgType;
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        echo $target_file;
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["image1"]["tmp_name"]);
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }
        // Check if file already exists
        if (file_exists($target_file)) {
            echo "Sorry, file already exists.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["image1"]["size"] > 50000000000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        && $imageFileType != "gif" ) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["image1"]["tmp_name"], $target_file)) {
                echo "The file ". basename( $_FILES["image1"]["name"]). " has been uploaded.";
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }

        $target_dir1 = "../../../../img/model/";

        $target_file1 = $target_dir1 . basename($_FILES["image2"]["name"]);
        $imgType1=strtolower(pathinfo($target_file1,PATHINFO_EXTENSION));
        
$target_file1 = $target_dir1 . $itemId."1.".$imgType1;
        $uploadOk = 1;
        $imageFileType1 = strtolower(pathinfo($target_file1,PATHINFO_EXTENSION));
        echo $target_file1;
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["image2"]["tmp_name"]);
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }
        // Check if file already exists
        if (file_exists($target_file1)) {
            echo "Sorry, file already exists.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["image2"]["size"] > 50000000000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType1 != "jpg" && $imageFileType1 != "png" && $imageFileType1 != "jpeg"
        && $imageFileType1 != "gif" ) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["image2"]["tmp_name"], $target_file1)) {
                echo "The file ". basename( $_FILES["image2"]["name"]). " has been uploaded.";
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }



//         $target_dir = "../../../../img/model/";

//         $target_file = $target_dir . basename($_FILES["image1"]["name"]);
//         $imgType=strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        
// $target_file = $target_dir . $itemId."2.".$imgType;
//         $uploadOk = 1;
//         $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
//         echo $target_file;
//         // Check if image file is a actual image or fake image
//         if(isset($_POST["submit"])) {
//             $check = getimagesize($_FILES["image2"]["tmp_name"]);
//             if($check !== false) {
//                 echo "File is an image - " . $check["mime"] . ".";
//                 $uploadOk = 1;
//             } else {
//                 echo "File is not an image.";
//                 $uploadOk = 0;
//             }
//         }
//         // Check if file already exists
//         if (file_exists($target_file)) {
//             echo "Sorry, file already exists.";
//             $uploadOk = 0;
//         }
//         // Check file size
//         if ($_FILES["image2"]["size"] > 50000000000) {
//             echo "Sorry, your file is too large.";
//             $uploadOk = 0;
//         }
//         // Allow certain file formats
//         if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
//         && $imageFileType != "gif" ) {
//             echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
//             $uploadOk = 0;
//         }
//         // Check if $uploadOk is set to 0 by an error
//         if ($uploadOk == 0) {
//             echo "Sorry, your file was not uploaded.";
//         // if everything is ok, try to upload file
//         } else {
//             if (move_uploaded_file($_FILES["image2"]["tmp_name"], $target_file)) {
//                 echo "The file ". basename( $_FILES["image2"]["name"]). " has been uploaded.";
//             } else {
//                 echo "Sorry, there was an error uploading your file.";
//             }
//         }



        $target_dir2 = "../../../../img/model/";

        $target_file2 = $target_dir2 . basename($_FILES["image3"]["name"]);
        $imgType2=strtolower(pathinfo($target_file2,PATHINFO_EXTENSION));
        
$target_file2 = $target_dir2 . $itemId."3.".$imgType;
        $uploadOk = 1;
        $imageFileType2 = strtolower(pathinfo($target_file2,PATHINFO_EXTENSION));
        echo $target_file2;
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["image3"]["tmp_name"]);
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }
        // Check if file already exists
        if (file_exists($target_file2)) {
            echo "Sorry, file already exists.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["image3"]["size"] > 50000000000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType2 != "jpg" && $imageFileType2 != "png" && $imageFileType2 != "jpeg"
        && $imageFileType2 != "gif" ) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["image3"]["tmp_name"], $target_file2)) {
                echo "The file ". basename( $_FILES["image3"]["name"]). " has been uploaded.";
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }



 echo $itemId;
?>
