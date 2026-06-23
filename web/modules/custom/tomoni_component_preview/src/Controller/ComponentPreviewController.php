<?php

declare(strict_types=1);

namespace Drupal\tomoni_component_preview\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Extension\ThemeExtensionList;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Builds the Tomoni component preview page.
 */
final class ComponentPreviewController extends ControllerBase {

  public function __construct(
    private readonly ThemeExtensionList $themeExtensionList,
  ) {}

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('extension.list.theme'),
    );
  }

  /**
   * Renders the component preview overview page.
   *
   * Component examples are intentionally maintained in Twig so site builders
   * can add or adjust examples without touching PHP.
   */
  public function overview(): array {
    return [
      '#theme' => 'tomoni_component_preview',
      '#sample_image' => $this->getSampleImage(),
      '#attached' => [
        'library' => [
          'tomoni/global',
          'tomoni_component_preview/preview',
        ],
      ],
    ];
  }

  /**
   * Returns a Canvas-compatible image value used by image components.
   */
  private function getSampleImage(): array {
    return [
      'src' => '/' . $this->themeExtensionList->getPath('tomoni') . '/components/media-card/assets/sample.jpg',
      'width' => 800,
      'height' => 600,
      'alt' => $this->t('Blue to green gradient placeholder image'),
    ];
  }

}
