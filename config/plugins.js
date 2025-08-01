module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'supabase',
            providerOptions: {
                apiUrl: env('SUPABASE_URL'),
                apiKey: env('SUPABASE_PUBLIC_KEY'),
                bucket: env('SUPABASE_BUCKET'),
                options: {},
            },
        },
    },
});
