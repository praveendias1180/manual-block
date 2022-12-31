<?php
/**
 * Plugin Name: Manual Custom Block
 * Plugin Description: Creating a WordPress block manually
 */

 function manual_custom_block_script_register(){
    wp_enqueue_script('manual-custom-block',plugin_dir_url(__FILE__).'manual-block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
 }

 add_action('enqueue_block_editor_assets', 'manual_custom_block_script_register');