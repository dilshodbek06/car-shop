package com.example.backend.Config;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;

// ...

public class DatabaseBackup {
    public static void main(String[] args) {
        // Replace with your database connection details
        String url = "jdbc:postgresql://localhost/postgres";
        String user = "postgres";
        String password = "akow4230";

        // Specify the directory where you want to save the backup
        String backupDirectory = "backend/files/backup";

        // Define the backup file name
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        String backupFileName = "backup_jon" + dateFormat.format(new Date()) + ".sql";

        // Combine the directory and file name to get the full file path
        String fullBackupPath = backupDirectory + backupFileName;

        try {
            Connection connection = DriverManager.getConnection(url, user, password);
            Statement statement = connection.createStatement();

            // Execute the pg_dump command to create a backup
            String backupCommand = "pg_dump -h localhost -U " + user + " -f " + fullBackupPath + " your_database";
            statement.execute(backupCommand);

            statement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
