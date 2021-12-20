class Globals { }

class DevelopmentGlobals extends Globals {
    public urls = {
        general: "http://localhost:8080/couponsProject/",
        administrator: "http://localhost:8080/couponsProject/admin/",
        company: "http://localhost:8080/couponsProject/company/",
        customer: "http://localhost:8080/couponsProject/customer/",
        guest: "http://localhost:8080/couponsProject/guest/"
    }
}

class ProductionGlobals extends Globals {
    public urls = {
        administrator: "/admin/",
        company: "/company/",
        customer: "/customer/",
        guest: "/guest/",
        general: "/"
    }
}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;