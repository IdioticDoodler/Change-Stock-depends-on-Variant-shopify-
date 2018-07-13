 /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;

      if (variant.inventory_management !== '' && variant.inventory_quantity <= 5) {
        $('#soldout-text').text('SOLD OUT FOR TODAY, ALL ORDERS WILL BE DELIVERED TOMORROW UNLESS YOU HAVE SELECTED A LATER DATE');
      } else if (variant.inventory_management !== '' && variant.inventory_quantity > 5) {
        $('#soldout-text').text('');
      }

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }

    },
