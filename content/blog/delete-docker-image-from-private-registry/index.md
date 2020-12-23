---
title: How to Delete Docker Image From Private Registry
date: "2020-06-12T23:14:00.000Z"
---

I have worked for a while with Docker and I loved it, but in this post, I do not want to talk about the pros of this application, because you can find tons of articles about it on the Internet. I want to focus more on registries, more specifically the private ones.

On Docker Hub the delete process is extremely simple, just click a big red button and write down the name of the repository, and the game is done. True, you can miss spelling the name, but I am confident you can do it! 😄

In the private registry, this magic red button does not exist and the process gets complicated ☹️.

The only working solution I have found is through Docker's API, so prepare yourself to execute some HTTP requests.

The first thing we have to obtain to perform image deletion is its reference code. To obtain this magic code, you must perform the following request.

```bash
curl -i -H "Accept: application/vnd.docker.distribution.manifest.v2+json" https://registry.url/v2/<image_name>/manifests/<image_tag>
```

Have you got any response from the API? Yes? Perfect! I think the first lines must be something like that.

```bash
HTTP/2 200 
content-type: application/vnd.docker.distribution.manifest.v2+json
docker-content-digest: sha256:9d8a5598704c0427be6fed9937f62342db199c8a73083695f545e93fac3b08d8
docker-distribution-api-version: registry/2.0
```

The code we are seeking is in the header of the response and it is the one called `docker-content-digest`, so saved it because we have to use it in our next request.

```bash
curl -X "DELETE" https://registry.url/v2/<image_name>/manifests/<docker-content-digest>
```

After that, the image will be removed from our registry, but if you check the space is not change so much. Why? We have to execute the registry garbage collector to remove the image from the disk and clear some space.

To execute the garbage-collect you must execute the following code, but I suggest running it before with the `-d` to understand which change it will be made to our beautiful registry.

```bash
/bin/registry garbage-collect /pat/to/registry/config.yml
```

I hope this guide has been helpful to you, so I invite all of you to post a comment down below if you have any advice or question.

Cheers!
