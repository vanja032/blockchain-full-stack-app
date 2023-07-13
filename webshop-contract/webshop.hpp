#include <inery/inery.hpp>

using namespace inery;

class [[inery::contract]] webshop : public contract {
public:
  using contract::contract;

  webshop(name receiver, name code, datastream<const char *> ds)
      : contract(receiver, code, ds) {}

  struct [[inery::table]] user {
    inery::name username;
    std::string password_hash;
    std::string name;
    std::string phone;
    std::string email;
    std::string address;
    std::string role;

    uint64_t primary_key() const { return username.value; }
  };

  struct [[inery::table]] product {

    uint64_t id;
    std::string name;
    std::string desc;
    std::string unit;

    double quantity;
    double price;

    uint64_t primary_key() const { return id; }
  };

  struct order_item {
    uint64_t product_id;
    double quantity;
    double product_price;
    double total_price;
  };

  struct [[inery::table]] order {
    uint64_t id;
    inery::name username;
    std::vector<order_item> items;
    time_point order_date;
    time_point expected_delivery_date;
    std::string status;
    double total_price;

    uint64_t primary_key() const { return id; }
  };

  typedef inery::multi_index<"users"_n, user> users_t;
  typedef inery::multi_index<"products"_n, product> products_t;
  typedef inery::multi_index<"orders"_n, order> orders_t;

  [[inery::action]] void signup(inery::name username, std::string password_hash,
                                std::string email, std::string name,
                                std::string phone, std::string address,
                                std::string role);
};