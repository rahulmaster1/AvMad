(function (w, d, x, id) {
    s = d.createElement('script');
    s.src = 'https://dtn7rvxwwlhud.cloudfront.net/amazon-connect-chat-interface-client.js';
    s.async = 1;
    s.id = id;
    d.getElementsByTagName('head')[0].appendChild(s);
    w[x] =
        w[x] ||
        function () {
            (w[x].ac = w[x].ac || []).push(arguments);
        };
})(window, document, 'amazon_connect', '47950534-6513-4d4d-a2c2-f4be2078c67e');
amazon_connect('styles', {
    openChat: { color: '#ffffff', backgroundColor: '#123456' },
    closeChat: { color: '#ffffff', backgroundColor: '#123456' }
});
amazon_connect(
    'snippetId',
    'QVFJREFIaUczMG9CY2pZeGVON3dIRFJwVkJlRHFKcW1kTTRlazcxajNHMVd5VzM1ZWdIYUN0ZUhxbldwVE8vVTJ2aVd2OEFPQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNMDFmYmR6WEZScllrRmplRkFnRVFnQ3RtSEF6bFh4b1h5SGQxRHZuOEdLWDhNRzAzcEZpMkRBNEFLNGYzUGRaekdFSlJhbEQwYmUyZjFoL0M6OnJ6cFU0ZVV1aHhRMTJhZlY2bm1hcEIvTHg2UGdFM1NCNHprdE93YzhzeUw0Wm13S3dSb3Z1aG0vdDYrdE1nWXJpVDVpcWxBYmwrS1BDbldRNnVZMWdyanljOG9YSGgrZisvS1kyK0phRDhvWnFiQUJKZDExeHJQcmhzR0oyQkVBcEJ1bGFyWEw2QXBHb1RjaTNXc0NINkk0VXlUUjdYRT0='
);
amazon_connect('supportedMessagingContentTypes', ['text/plain', 'text/markdown']);
