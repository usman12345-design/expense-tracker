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

/* invoice/invoice.twig */
class __TwigTemplate_90318e2f52e3d2d0fd1bc0acf0813de7 extends Template
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
        ];
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 1
        yield "<h2>Paid Invoices Dashboard</h2>

";
        // line 3
        if (Twig\Extension\CoreExtension::testEmpty(($context["invoices"] ?? null))) {
            // line 4
            yield "    <p>No paid invoices found in the system ledger storage matching parameters.</p>
";
        } else {
            // line 6
            yield "    <table>
        <thead>
        <tr>
            <th>Invoice ID</th>
            <th>Invoice Number</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Created At</th>
        </tr>
        </thead>
        <tbody>
        ";
            // line 17
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(($context["invoices"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["invoice"]) {
                // line 18
                yield "            <tr>
                ";
                // line 20
                yield "                <td><strong>#";
                yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["invoice"], "id", [], "any", false, false, false, 20), "html", null, true);
                yield "</strong></td>
                <td>";
                // line 21
                yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["invoice"], "invoiceNumber", [], "any", false, false, false, 21), "html", null, true);
                yield "</td>
                <td>\$";
                // line 22
                yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatNumber(CoreExtension::getAttribute($this->env, $this->source, $context["invoice"], "amount", [], "any", false, false, false, 22), 2, ".", ","), "html", null, true);
                yield "</td>
                <td>
                    <span class=\"status-badge\">
                        ";
                // line 26
                yield "                        ";
                yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["invoice"], "status", [], "any", false, false, false, 26), "toString", [], "any", false, false, false, 26), "html", null, true);
                yield "
                    </span>
                </td>
                <td>";
                // line 29
                yield (string) $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["invoice"], "createdAt", [], "any", false, false, false, 29), "Y-m-d H:i:s"), "html", null, true);
                yield "</td>
            </tr>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['invoice'], $context['_parent']);
            $context = array_intersect_key($context, $_parent);
            $context += $_parent;
            // line 32
            yield "        </tbody>
    </table>
";
        }
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "invoice/invoice.twig";
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
        return array (  105 => 32,  95 => 29,  88 => 26,  82 => 22,  78 => 21,  73 => 20,  70 => 18,  66 => 17,  53 => 6,  49 => 4,  47 => 3,  43 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "invoice/invoice.twig", "/var/www/Views/invoice/invoice.twig");
    }
}
