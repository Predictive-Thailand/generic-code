import os
from google.cloud import storage

# pip install --upgrade google-cloud-storage
# export GOOGLE_APPLICATION_CREDENTIALS="/path/to/file.json"

bucket_name = "mils_pubsub"
current_path = os.getcwd()
source_file_name = f"{current_path}/tmp/milseiei.csv.ctrl"
destination_blob_name = "milseiei.csv.ctrl"

def upload_blob(bucket_name, source_file_name, destination_blob_name):
    """Uploads a file to the bucket."""

    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(source_file_name)

    print(
        "File {} uploaded to {}.".format(
            source_file_name, destination_blob_name
        )
    )


upload_blob(bucket_name, source_file_name, destination_blob_name)