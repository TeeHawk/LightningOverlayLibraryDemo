({
    openModal : function(component, event, helper) {
        $A.createComponent("c:LightningOverlayBody", { modalName: "Sample Modal"},
            function(content, status){
                if (status === "SUCCESS") {
                    let modalBody = content;
                    component.find("overlayLib").showCustomModal({
                        header: "A Lightning Modal",
                        body: modalBody,
                        showCloseButton: true,
                        // css classes must be accompanied by the namespace+name of the calling component
                        cssClass: "cLightningOverlayCaller custom-class",
                        closeCallback: function() {
                            alert("The closeCallback function was called!");
                        }
                   });
                }
            });
    },

    openModalWithFooter : function(component, event, helper) {
        $A.createComponents([
                ["c:LightningOverlayBody", {}],
                ["c:LightningOverlayFooter", {}]
            ],
            function(content, status){
                if (status === "SUCCESS") {
                    let modalBody = content[0];
                    let modalFooter = content[1];
                    component.find("overlayLib").showCustomModal({
                        header: "A Lightning Modal w/ Footer",
                        body: modalBody,
                        footer: modalFooter,
                        showCloseButton: true,
                        cssClass: "custom-class",
                        closeCallback: function() {}
                   });
                }
            });
    },

    openTimedModal : function(component, event, helper) {
        component.find("overlayLib").showCustomModal({
            header: "This Modal Will Close",
            body: "Soon this modal will auto-close.",
            showCloseButton: false,
            closeCallback: function() {}
        }).then(function(overlay) {
            setTimeout(function(){
                overlay.close();
            }, 5000);
        });
    },

    openPopover : function(component, event, helper) {
        if (component._overlay) {
            component._overlay.close();
        }

        component.find("overlayLib").showCustomPopover({
            body: "This popover body is defined with text",
            referenceSelector: ".popover1",
            cssClass: "cLightningOverlayCaller,popover-class"
        }).then(function(overlay){
            component._overlay = overlay;
        });
    }
})
