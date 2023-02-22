<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Woody</title>

        <link rel="stylesheet" href="{{ asset('css/uikit.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/uikit-rtl.min.css') }}" />

        <script src="{{ asset('js/uikit.min.js') }}"></script>
        <script src="{{ asset('js/uikit-icons.min.js') }}"></script>
        @vite('resources/css/app.css')
        <style>
            body{
                width: 100%;
                height: 100vh;
            }
        </style>
    </head>
    <body id="app">

        @vite('resources/js/app.js')
    </body>
</html>
