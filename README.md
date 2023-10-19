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

## Basic usage

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

## ⭐️ Show Your Support

Please give a ⭐️ if this project helped you!

### Other Packages You Might Like

- [Nova Rating Field](https://github.com/operativeit/nova-rating-field) - A Star rating field to use in your Laravel Nova apps.
- [Nova Input Group](https://github.com/operativeit/nova-input-group) - A Laravel Nova4 text field formatted as input group

Take a look to our Github repositories as we have a lot of forked nova components with fixes that are still not merge into main owner branch.

## License

The MIT License (MIT). Please see [License File](https://raw.githubusercontent.com/dcasia/nova-welcome-card/master/LICENSE) for more information.
