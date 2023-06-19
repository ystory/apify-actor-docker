# Apify base Docker images

Public Docker images forked from the Apify Actor serverless platform to support both linux/amd64 and linux/arm64
architectures. The sources for the images are present in subdirectories named after the corresponding Docker image.
For example, the node-playwright-chromium directory corresponds to the ystory/node-playwright-chromium Docker image.

## Fork Rationale

The original Apify Actor Docker images only support the linux/amd64 architecture. This project,
ystory/apify-actor-docker, aims to extend that support to linux/arm64 as well, allowing for wider compatibility
across different systems. As a starting point, I've created the ystory/node-playwright-chromium image utilizing
the Chromium browser.

## Maintenance and Usage

To build and publish a new version of the Docker images, follow the same steps outlined in the Apify Actor Docker
images maintenance section. For more information, including adding a new actor image and managing permissions,
please refer to the original README.md file of apify/apify-actor-docker.

## Acknowledgements

This project is forked from apify/apify-actor-docker.

