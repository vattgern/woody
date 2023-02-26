<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {{--    ICON     --}}
        <link rel="icon" href="{{ asset('/favicon.ico') }}">
        <title>{{ env('APP_NAME') }}</title>
        {{--    UI_KIT_ASSETS    --}}
        <link rel="stylesheet" href="{{ asset('css/uikit.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/uikit-rtl.min.css') }}" />
        <script src="{{ asset('js/uikit.min.js') }}"></script>
        <script src="{{ asset('js/uikit-icons.min.js') }}"></script>
        {{--    GOOGLE_FONTS    --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap" rel="stylesheet">
        {{--    VITE_ASSETS    --}}
        @vite('resources/css/app.css')
    </head>

    <body id="app">
        {{--   MOUNT     --}}
        @vite('resources/js/app.js')
    </body>
</html>
