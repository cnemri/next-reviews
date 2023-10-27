/** @type {import('next').NextConfig}*/
module.exports = {
  // output: "export",
  images: {
    remotePatterns: [toRemotePattern(url)],
  },
};

const toRemotePattern = (url) => {
  const { hostname, protocol, port, pathname } = new URL(
    process.env.CMS_IMAGE_PATTERN
  );
  return {
    hostname,
    protocol: protocol.replace(":", ""),
    port,
    pathname,
  };
};
