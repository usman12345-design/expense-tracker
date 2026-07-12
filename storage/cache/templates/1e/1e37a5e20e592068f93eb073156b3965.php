<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Sandbox\SecurityNotAllowedTestError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* layout.twig */
class __TwigTemplate_16d1f82c9982bcb5c1810cc94ab64b62 extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'content' => [$this, 'block_content'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 1
        yield "<!DOCTYPE html>
<html lang=\"en\" class=\"h-full bg-gray-100\">
<head>
    <meta charset=\"UTF-8\">
    <title>";
        // line 5
        yield from $this->unwrap()->yieldBlock('title', $context, $blocks);
        yield "</title>
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\" rel=\"stylesheet\">
    ";
        // line 9
        yield from $this->unwrap()->yieldBlock('stylesheets', $context, $blocks);
        // line 12
        yield "    
</head>

<body>
<div class=\"container\">
    <header class=\"d-flex flex-wrap justify-content-center py-3 mb-4\">
        <a href=\"/\" class=\"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none\">
            <img src=\"";
        // line 19
        yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/images/logo.png"), "html", null, true);
        yield "\" width=\"64\" height=\"64\" alt=\"Expennies Logo\" />
            <span class=\"fs-1 fw-bold\">Expense<span class=\"text-primary\">Pilot</span></span>
        </a>

        <div class=\"d-flex align-items-center\">
            <ul class=\"nav nav-pills align-items-center me-3\">
                <li class=\"nav-item\"><a href=\"#\" class=\"nav-link fw-bold fs-5 active\" aria-current=\"page\">Overview</a></li>
                <li class=\"nav-item\"><a href=\"#\" class=\"nav-link fw-bold fs-5\">Transactions</a></li>
                <li class=\"nav-item\"><a href=\"#\" class=\"nav-link fw-bold fs-5\">Categories</a></li>
            </ul>

            <!-- 3. Dropdown Component (Perfectly aligned with the menu items) -->
            <div class=\"dropdown user-dropdown-menu\">
                <a href=\"#\" class=\"nav-link d-inline-block p-1\" id=\"userDropDownMenu\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">
                    <!-- 💡 Removed the hardcoded color style from the SVG so it inherits the gray/dark gray from your scss -->
                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"
                         stroke=\"currentColor\" style=\"width: 32px; height: 32px; display: inline-block;\" class=\"icon\">
                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"
                              d=\"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z\" />
                    </svg>
                </a>
                <!-- 💡 Force display: block when Bootstrap adds the \x27show\x27 class -->
                <ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"userDropDownMenu\" style=\"top: 100%; right: 0;\">
                    <li>
                        <form action=\"/logout\" method=\"post\" class=\"m-0\">
                            <button type=\"submit\" class=\"dropdown-item\">Log Out</button>
                        </form>
                    </li>
                </ul>

            </div>
        </div>

    </header>
</div>
<div class=\"container\">
    ";
        // line 55
        yield from $this->unwrap()->yieldBlock('content', $context, $blocks);
        // line 56
        yield "</div>

";
        // line 58
        yield from $this->unwrap()->yieldBlock('javascripts', $context, $blocks);
        // line 61
        yield "</body>
</html>";
        yield from [];
    }

    // line 5
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        yield "ExpensePilot";
        yield from [];
    }

    // line 9
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_stylesheets(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 10
        yield "        ";
        yield (string) $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        yield "
    ";
        yield from [];
    }

    // line 55
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_content(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        yield from [];
    }

    // line 58
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_javascripts(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 59
        yield "    ";
        yield (string) $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        yield "
";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "layout.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  167 => 59,  160 => 58,  150 => 55,  142 => 10,  135 => 9,  124 => 5,  118 => 61,  116 => 58,  112 => 56,  110 => 55,  71 => 19,  62 => 12,  60 => 9,  53 => 5,  47 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "layout.twig", "/var/www/resources/views/layout.twig");
    }
}
