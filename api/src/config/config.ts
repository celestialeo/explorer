import process from 'node:process';
import { Config } from './config.interface.js';

export default (): Config => {
  const ENV = process.env;

  const config: Config = {
    info: {
      build: ENV.CI_COMMIT_SHA,
    },

    ol: {
      // provider: "https://rpc.0l.fyi",
      provider: "https://rpc.openlibra.space:8080/",
    },

    s3: {
      region: ENV.S3_REGION!,
      endpoint: ENV.S3_ENDPOINT!,
      accessKey: ENV.S3_ACCESS_KEY_ID!,
      secretKey: ENV.S3_SECRET_ACCESS_KEY!,
      port: ENV.S3_PORT ? parseInt(ENV.S3_PORT, 10) : 443,
      useSSL: ENV.S3_USE_SSL ? ENV.S3_USE_SSL === 'true' : true,
      bucket: ENV.S3_BUCKET!,
      storageClass: ENV.S3_STORAGE_CLASS!,
    },

    clickhouse: {
      httpHost: ENV.CLICKHOUSE_HTTP_HOST!,
      httpUsername: ENV.CLICKHOUSE_HTTP_USERNAME,
      httpPassword: ENV.CLICKHOUSE_HTTP_PASSWORD,
      host: ENV.CLICKHOUSE_HOST!,
      port: parseInt(ENV.CLICKHOUSE_PORT!, 10),
      database: ENV.CLICKHOUSE_DATABASE!,
    },
  };

  return config;
};
