from app.urgency import urgency_label


def test_urgency_labels():
    assert urgency_label(-1) == "overdue"
    assert urgency_label(0) == "due within 3 days"
    assert urgency_label(3) == "due within 3 days"
    assert urgency_label(4) == "due this week"
