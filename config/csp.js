module.exports = {
    directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'blob:', 'https://rdvxwkgokrymnufessth.storage.supabase.co'],
        'media-src': ["'self'", 'data:', 'blob:', 'https://rdvxwkgokrymnufessth.storage.supabase.co'],
        'connect-src': ["'self'", 'https://rdvxwkgokrymnufessth.supabase.co', 'wss:'],
    },
};
