import csv

def embed_audio_urls_in_iframes(file_path):
    # Reads a file containing audio URLs and returns a list of HTML iframes
    with open(file_path, 'r') as file:
        audio_urls = [url.strip() for url in file if url.strip()]

    embedded_iframes = []
    iframe_template = ('<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" '
                       'frameBorder="0" height="175" style="width:\'100%\'; max-width:\'660px\'; '
                       'overflow:\'hidden\'; border-radius:\'10px\';" sandbox="allow-forms allow-popups '
                       'allow-same-origin allow-scripts allow-storage-access-by-user-activation '
                       'allow-top-navigation-by-user-activation" src="{url}" />')

    for url in audio_urls:
        embedded_iframes.append(iframe_template.format(url=url))

    return embedded_iframes

def store_embedded_list_in_csv(embedded_list, output_csv_path):
    # Stores the list of embedded iframes into a CSV file
    with open(output_csv_path, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["Iframe"])  # Write a header
        for iframe in embedded_list:
            writer.writerow([iframe])  # Write each iframe

def process_lines_from_file(file_path):
    # Processes each line of a file to ensure it's formatted with backticks and commas
    try:
        with open(file_path, 'r') as file:
            content = file.readlines()  # Read lines into a list

        processed_lines = [
            f"`{line.strip()}`," if line.strip().startswith('<iframe') else line
            for line in content
        ]

        return "\n".join(processed_lines)  # Join processed lines into a single string
    except Exception as e:
        print(f"An error occurred: {e}")
        return ""

# Main execution
if __name__ == "__main__":
    # Specify the input and output paths
    input_file_path = 'audio.txt'  # Replace with the actual path to your audio URLs file
    output_csv_path = 'embedded_iframes.csv'  # Replace with your desired output path for the CSV

    # Embed audio URLs into iframes
    embedded_list = embed_audio_urls_in_iframes(input_file_path)

    # Store the embedded iframes list into a CSV file
    store_embedded_list_in_csv(embedded_list, output_csv_path)

    # Optionally, process lines from the file (if needed)
    processed_content = process_lines_from_file(input_file_path)
    print(processed_content[:1000])  # Displaying only the first 1000 characters for brevity

    print(f"Embedded iframes stored in {output_csv_path}")
