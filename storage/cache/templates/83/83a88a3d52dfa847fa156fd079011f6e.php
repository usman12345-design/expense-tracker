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

/* auth/register.twig */
class __TwigTemplate_4dc60bbd970e3ed7f462150341edebf4 extends Template
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
            'title' => [$this, 'block_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "auth/layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $this->parent = $this->load("auth/layout.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        yield "Register";
        yield from [];
    }

    // line 5
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_content(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 6
        yield "    ";
        yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(json_encode(($context["errors"] ?? null)), "html", null, true);
        yield "
    <section class=\"vh-100 bg-primary bg-gradient\">
        <div class=\"container py-5 h-100\">
            <div class=\"row d-flex justify-content-center align-items-center h-100\">
                <div class=\"col-12 col-md-8 col-lg-6 col-xl-5\">
                    <div class=\"card bg-light text-white\" style=\"border-radius: 1rem;\">
                        <div class=\"card-body p-5 text-center\">
                            <div class=\"mb-4\">
                                <h2 class=\"fw-bold mb-5 text-uppercase text-primary d-flex justify-content-center align-items-center\">
                                    <img src=\"";
        // line 15
        yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("build/images/logo.png"), "html", null, true);
        yield "\" width=\"64\" height=\"64\"
                                         alt=\"Expennies Logo\" />
                                    Register
                                </h2>
                                <form method=\"post\" action=\"/register\">
                                    <div class=\"form-outline form-white mb-4\">
                                        <input type=\"text\" name=\"name\" required
                                               class=\"form-control form-control-lg ";
        // line 22
        yield (string) (((($tmp = CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "name", [], "any", false, false, false, 22)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("is-invalid") : (""));
        yield "\"
                                               placeholder=\"Name\" />
                                        <div class=\"invalid-feedback\">
                                            ";
        // line 25
        yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::first($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "name", [], "any", false, false, false, 25)), "html", null, true);
        yield "
                                        </div>
                                    </div>
                                    <div class=\"form-outline form-white mb-4\">
                                        <input type=\"email\" name=\"email\" required
                                               class=\"form-control form-control-lg ";
        // line 30
        yield (string) (((($tmp = CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "email", [], "any", false, false, false, 30)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("is-invalid") : (""));
        yield "\"
                                               placeholder=\"Email\" />
                                        <div class=\"invalid-feedback\">
                                            ";
        // line 33
        yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::first($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "email", [], "any", false, false, false, 33)), "html", null, true);
        yield "
                                        </div>
                                    </div>
                                    <div class=\"form-outline form-white mb-4\">
                                        <input type=\"password\" name=\"password\" required
                                               class=\"form-control form-control-lg ";
        // line 38
        yield (string) (((($tmp = CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "password", [], "any", false, false, false, 38)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("is-invalid") : (""));
        yield "\"
                                               placeholder=\"Password\" />
                                        <div class=\"invalid-feedback\">
                                            ";
        // line 41
        yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::first($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "password", [], "any", false, false, false, 41)), "html", null, true);
        yield "
                                        </div>
                                    </div>
                                    <div class=\"form-outline form-white mb-5\">
                                        <input type=\"password\" name=\"confirmPassword\" required
                                               class=\"form-control form-control-lg ";
        // line 46
        yield (string) (((($tmp = CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "confirmPassword", [], "any", false, false, false, 46)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("is-invalid") : (""));
        yield "\"
                                               placeholder=\"Confirm Password\" />
                                        <div class=\"invalid-feedback\">
                                            ";
        // line 49
        yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::first($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "confirmPassword", [], "any", false, false, false, 49)), "html", null, true);
        yield "
                                        </div>
                                    </div>
                                    <button class=\"btn btn-primary bg-gradient text-white btn-lg px-5\" type=\"submit\">
                                        Register
                                    </button>
                                </form>
                            </div>
                            <div>
                                <p class=\"mb-0 text-dark\">Have an account?
                                    <a href=\"/login\" class=\"text-primary fw-bold\">Sign In</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "auth/register.twig";
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
        return array (  142 => 49,  136 => 46,  128 => 41,  122 => 38,  114 => 33,  108 => 30,  100 => 25,  94 => 22,  84 => 15,  71 => 6,  64 => 5,  53 => 3,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "auth/register.twig", "/var/www/resources/views/auth/register.twig");
    }
}
