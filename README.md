# Nova Feedback Field

An **Emoji feedback field** to use in your Laravel Nova 4 apps

THIS FIELD IS STILL IN A VERLY EARLY DEVELOPMENT STAGE. Testing, report bugs and improvements are welcome.

[![Latest Version on Packagist](https://img.shields.io/packagist/v/operativeit/nova-feedback-field.svg?style=flat-square)](https://packagist.org/packages/operativeit/nova-rating-field)
[![Total Downloads](https://img.shields.io/packagist/dt/operativeit/nova-feedback-field.svg?style=flat-square)](https://packagist.org/packages/operativeit/nova-rating-field)
![GitHub forks](https://img.shields.io/github/forks/operativeit/nova-feedback-field)
![GitHub issues](https://img.shields.io/github/issues/operativeit/nova-feedback-field)

![imagen](https://github.com/operativeit/nova-feedback-field/assets/188766/82a4115c-ab08-439f-b858-1266536fd5c2)


## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require eom-plus/nova-feedback-field
```

Next you can use the `Eom-Plus\NovaFeedbackField\Feedback` field in your Nova resource.

## Usage

```php
public function fields(Request $request)
{
    return [
        // ...
        Feedback::make('Feedback'),
        // ...
    ];
}
```
