(ns wh.components.not-found
  (:require [wh.routes :as routes]))

(defn not-found []
  [:div.container
   [:h1 "404 - Page not Found"]
   [:div
    [:h2 "Play a game \uD83D\uDC7E instead?"]
    (let [msg "Seriously? No. Stop procrastinating and go find a job!"]
      [:a.button (merge {:href (routes/path :homepage)}
                        #?(:clj  {:onclick (str "alert('" msg "')")}
                           :cljs {:on-click #(js/alert msg)}))
       "Play"])]])

(defn not-found-page []
  [:div.dashboard
   [:div.main.main--center-content
    [not-found]]])
