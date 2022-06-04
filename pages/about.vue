<template>
  <div>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-primary-light sm:text-4xl">About us</span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">
          Welcome to Shigoto, your number one source for all your cloud needs.
        </p>
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
        <p>
          Shigoto will let you <strong>build and push</strong> docker images, <strong>deploy on kubernetes</strong>, create scheduled tasks and more.
          We here at Shigoto have decided to provide a SaaS solution for our community,
          so that you can focus on building your apps without having to worry about the nitty gritty details of deployments,
          keeping track of what's deployed etc.,
        </p>
        <p>
          Or dealing with custom tools built by individual developers that may get abandoned after usage of them dilutes across the community.
        </p>
        <p>
          Founded in 2022 by Simeon and Bogdan, <span class="text-primary">Shigoto</span> has come a long way from its beginnings.
          We hope you enjoy our products as much as we enjoy building them.
          If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p class="space-y-2 -mt-2 -mb-2">
          Sincerely,
        </p>
        <p class="-mt-2">
        <span class="text-primary-light">
          Simeon.
          </span>
        </p>
        <blockquote>
          <p>One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man.</p>
        </blockquote>
        <div class="flex justify-center items-center">
          <img class="logo" src="../assets/branding/logo/LogoWithoutText.png" alt="logo">
        </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>

.logo
{
  width: 10%;
  align-self: center;
  margin-top: 1rem;
}
@media screen and (max-width: 600px) {
  .page__content {
    width: 90%;
  }
  }
</style>
