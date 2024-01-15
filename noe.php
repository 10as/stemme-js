<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nPass = $_POST['npass'];
    $rPass = $_POST['rpass'];

    $userId = $_SESSION['user_id'];
    
    $oPass = $_SESSION['passord'];

    if($npass == $oPass == $rPass/* se på login side */){
         $updateQuery = "UPDATE users SET password = '$hashedPassword' WHERE id = $userId";//se på login side

        if ($con->query($updateQuery) === TRUE) {
            echo "Password updated successfully";
        } else {
            echo "Error updating password: " . $con->error;
        }
    }    
    
   
}
?>