#!/bin/bash

WEBP_PATH="C:/Users/Cyril/Documents/libwebp-1.3.1-windows-x64/bin/cwebp"  # Update with the actual path to the cwebp tool

# Iterate over each file in the current folder
for file in *; do
    # Check if the file is an image (you may need to modify the condition based on your file naming conventions)
    if [[ $file =~ /.(png|jpg|jpeg)$ ]]; then
        # Construct the output file name with the .webp extension
        output_file="${file%.*}.webp"

        # Convert the image to WebP using cwebp
        "$WEBP_PATH" "$file" -o "$output_file"

        echo "Converted: $file"
    fi
done
