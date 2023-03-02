<?php

declare(strict_types=1);

namespace App\Controller;

use Laminas\Diactoros\Response\HtmlResponse;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Illuminate\Contracts\View\Factory;

/**
 *
 */
class HelloWorldController implements RequestHandlerInterface
{
    /**
     * @var Factory
     */
    protected $view;

    public function __construct(Factory $view)
    {
        $this->view = $view;
    }

    public function handle(Request $request): Response
    {
        $view = $this->view->make('test.index::greeting', ['name' => 'serbin']);

        return new HtmlResponse($view->render());
    }
}
