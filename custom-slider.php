<?php
/**
 * Plugin Name: Custom Slider 
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if (! defined('ABSPATH')) {
	exit;
}

// Constant
define('CMSL_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('CMSL_DIR_URL', plugin_dir_url(__FILE__));
define('CMSL_DIR_PATH', plugin_dir_path(__FILE__));

if (! class_exists('CMSLPlugin')) {
	class CMSLPlugin
	{
		function __construct()
		{
			add_action('init', [$this, 'onInit']);
		}

		function onInit()
		{
			register_block_type(__DIR__ . '/build');
			// wp_enqueue_script('sweetalert2');
		}

		function enqueueBlockAssets(): void
		{
			wp_register_script('sweetalert2', CMSL_DIR_URL . '/public/js/sweetalert2.js', [], '11.15.10');
			wp_register_style('sweetalert2', CMSL_DIR_URL . '/public/css/sweetalert2.css', [], '11.15.10');
		}
	}
	new CMSLPlugin();
}