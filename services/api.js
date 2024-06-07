import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nqmrcofvtrfnvdcvkvqo.supabase.co/rest/v1/',
    headers: {
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xbXJjb2Z2dHJmbnZkY3ZrdnFvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzY4ODU5NCwiZXhwIjoyMDMzMjY0NTk0fQ.ShGcHe3ThUx6O5wfL5VUo8xmLQB8CzOZQW9DjMyZ8Eo",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xbXJjb2Z2dHJmbnZkY3ZrdnFvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzY4ODU5NCwiZXhwIjoyMDMzMjY0NTk0fQ.ShGcHe3ThUx6O5wfL5VUo8xmLQB8CzOZQW9DjMyZ8Eo"
    }
})