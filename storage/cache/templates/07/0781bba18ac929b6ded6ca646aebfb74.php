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

/* dashboard.twig */
class __TwigTemplate_9ce13a40baec0ba9b1fc7a77b9475257 extends Template
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

        $this->blocks = [
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $this->parent = $this->load("layout.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_stylesheets(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 4
        yield "    ";
        yield from $this->yieldParentBlock("stylesheets", $context, $blocks);
        yield "
    ";
        // line 5
        yield (string) $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("dashboard");
        yield "
";
        yield from [];
    }

    // line 8
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_javascripts(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 9
        yield "    ";
        yield from $this->yieldParentBlock("javascripts", $context, $blocks);
        yield "
    ";
        // line 10
        yield (string) $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("dashboard");
        yield "
";
        yield from [];
    }

    // line 13
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        yield "Dashboard";
        yield from [];
    }

    // line 15
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_content(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 16
        yield "    <div class=\"dashboard\">
        <div class=\"top-container mb-4 row g-0 rounded-4\">
            <div class=\"col-8 border-end border-3\">
                <div class=\"row justify-content-between\">
                    <div class=\"col p-4\">Expense \$</div>
                    <div class=\"col p-4\">Income \$</div>
                    <div class=\"col p-4\">Net \$</div>
                </div>
                <div class=\"row\">
                    <div class=\"col p-4\">Line/Bar/Donut Graph</div>
                </div>
            </div>
            <div class=\"col p-4\">
                Latest Transactions
            </div>
        </div>
        <div class=\"categories-container row\">
            <div class=\"col\">
                <div class=\"category-card p-4 rounded-4\">Category 1</div>
            </div>
            <div class=\"col\">
                <div class=\"category-card p-4 rounded-4\">Category 2</div>
            </div>
            <div class=\"col\">
                <div class=\"category-card p-4 rounded-4\">Category 3</div>
            </div>
            <div class=\"col\">
                <div class=\"category-card p-4 rounded-4\">Category 4</div>
            </div>
        </div>
    </div>
";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "dashboard.twig";
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
        return array (  111 => 16,  104 => 15,  93 => 13,  86 => 10,  81 => 9,  74 => 8,  67 => 5,  62 => 4,  55 => 3,  44 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "dashboard.twig", "/var/www/resources/views/dashboard.twig");
    }
}
